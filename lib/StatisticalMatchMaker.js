/*!
GPII/Cloud4all Statistical Matchmaker 

Copyright 2014 Hochschule der Medien (HdM) / Stuttgart Media University

Licensed under the New BSD License. You may not use this file except in
compliance with this licence.

You may obtain a copy of the licence at
https://github.com/AndreasStiegler/GPII_StatisticalMatchmaker2/blob/master/LICENSE.txt


The research leading to these results has received funding from 
the European Union's Seventh Framework Programme (FP7/2007-2013) 
under grant agreement no. 289016.
*/

var fluid = fluid || require("universal");

var matchMaker = fluid.registerNamespace("gpii.matchMaker");
var stat = fluid.registerNamespace("gpii.matchMaker.statistical");
var Client = require('node-rest-client').Client;

fluid.require("./StatisticalMatchMakerData.js", require);

var path = require("path");
var when = require("when");
var fs = require('fs');
var $ = fluid.registerNamespace("jQuery");
var gpii = fluid.registerNamespace("gpii");
var http = require('http');
var url = require('url');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

fluid.defaults("gpii.matchMaker.statistical.matchPost", {
    gradeNames: ["autoInit", "fluid.littleComponent"],
    invokers: {
        match: {
            funcName: "gpii.matchMaker.statistical.matchPostMatch",
            args: ["{gpii.matchMaker}", "{that}.when", "{arguments}.0", "{arguments}.1", "{request}.req.body"]
        }
    }
})

gpii.matchMaker.statistical.matchPostMatch = function (matchMaker, when, solutions, preferences, originalModel) {
	// Rejection tests
	if (!("device" in originalModel)) { fluid.log("Invalid SMM payload: 'deviceReporter' missing."); };
	if (!("preferences" in originalModel)) { fluid.log("Invalid SMM payload: 'preferences' missing."); };
	if (!("contexts" in preferences)) { fluid.log("Invalid SMM payload: 'preferences.contexts' missing."); };
	// Iterate over contexts
	var contexts = preferences.contexts;
	var result = {};
	result.inferredConfiguration = {};
	fluid.each(contexts, function(context, contextKey) {
		//if (!("preferences" in context)) { fluid.log("Invalid SMM payload: 'preferences.contexts[...].preferences' missing."); };
		var clustered = gpii.matchMaker.statistical.infer(context.preferences);
		result.inferredConfiguration[contextKey] = gpii.matchMaker.statistical.filterPreferences(clustered, solutions);
		// Add conditions to output if present
		if ("conditions" in context) {
			result.inferredConfiguration[contextKey].conditions = context.conditions;
		}
	});
	// If we arrived here, all is fine
	result.status = {};
	result.status.type = "success";
	return when(result);
}

fluid.defaults("kettle.requests.request.handler.matchPostStatistical", {
    gradeNames: ["autoInit", "fluid.gradeLinkageRecord"],
    contextGrades: ["kettle.requests.request.handler.matchPost"],
    resultGrades: ["gpii.matchMaker.statistical.matchPost"]
})

stat.infer = function (preferences) {
	var result = {};
	result.applications = {};
	try {
		// Additive Clusters
		var relevantClusters = stat.getRelevantClusters(preferences);
		relevantClusters.sort(function(a, b){return stat.getClusterDistance(preferences.applications, a) - stat.getClusterDistance(preferences.applications, b)});
		fluid.each(relevantClusters, function(curCluster){
			fluid.each(curCluster, function(settings, application){
				if (!(application in result.applications)) {
					result.applications[application] = {};
					stat.setSettings(result, application, settings);
				}
			});
		});
		/*
		// Generalized Clusters
		var cluster;
		if ("applications" in preferences) {
			cluster = stat.getClosestCluster(preferences.applications);
		} else {
			cluster = stat.clusters[0];
		}
		fluid.each(cluster, function(settings, application){
			if (!(application in preferences.applications)) {
				preferences.applications[application] = {};
				preferences.applications[application]["id"] = application;
				stat.setSettings(preferences, application, settings)
			}
		});
		*/
	} catch(err) {
		fluid.log("====== SMM ERROR ======");
		fluid.log(err);
		fluid.log("====== SMM ERROR ======");
	}
    return result;
}

stat.getRelevantClusters = function (preferences) {
	var result = [];
	fluid.each(stat.clusters, function(curCluster){
		if (stat.getClusterDistance(preferences.applications, curCluster) != stat.entryCount) {
			result.push(curCluster);
		}
	});
	return result;
}

stat.getClosestCluster = function (preferences) {
	var distance = Infinity;
	var cluster;
	fluid.each(stat.clusters, function(curCluster){
		var curDistance = stat.getClusterDistance(preferences, curCluster);
		if (curDistance < distance) {
			cluster = curCluster;
			distance = curDistance;
		};
	});
	return cluster;
}

stat.getClusterDistance = function (preferences, cluster) {
	var result = stat.entryCount;
	fluid.each(preferences, function(prefValues, prefKey){
		prefKey = prefKey.replace("http://registry.gpii.org/applications/", "");
		fluid.each(prefValues, function(prefValue, prefValueKey){
			// Noise tolerant distance measure
			if ((prefKey in cluster) && (prefValueKey in cluster[prefKey])) {
				var clusterValue = cluster[prefKey][prefValueKey];
				if (prefValue == clusterValue) {
					result -= 1;
				} else {
					var statType = stat.preferenceTypes[prefKey][prefValueKey];
					if (typeof prefValue == "object" && prefValue != null) {
						prefValue = prefValue["value"];
					}
					if (statType["isEnum"]) {
						result -= (1 - Math.max(Math.min( 1 / statType["max"] ,1),0));
					} else if (statType["min"] != statType["max"]) {
						result -= (1 - Math.max(Math.min( Math.abs( (prefValue - clusterValue) / (statType["max"] - statType["min"]) ) ,1),0));
					}
				}
			}
			/*
			// Conventional distance measure
			if (!(prefKey in cluster)) {
				result = result + 0.5;
			} else if (!(prefValueKey in cluster[prefKey])) {
				result = result + 0.5;
			} else if (prefValue != cluster[prefKey][prefValueKey]) {
				var clusterValue = cluster[prefKey][prefValueKey];
				var statType = stat.preferenceTypes[prefKey][prefValueKey];
				if (typeof prefValue == "object" && prefValue != null) {
					prefValue = prefValue["value"];
				}
				if (statType["isEnum"]) {
					result -= Math.max(Math.min( 1 / statType["max"] ,1),0);
				} else if (statType["min"] != statType["max"]) {
					result -= Math.max(Math.min( Math.abs( (prefValue - statType["min"]) / (statType["max"] - statType["min"]) - (clusterValue - statType["min"]) / (statType["max"] - statType["min"]) ) ,1),0);
				}
			};
			*/
		});
	});
	return result;
}

stat.setSettings = function (preferences, application, settings) {
	preferences.applications[application]["settings"] = settings;
}

stat.filterPreferences = function (preferences, solutions) {
	var result = {};
	result.applications = {};
	fluid.each(preferences.applications, function(prefValues, prefKey) {
		var found = false;
		fluid.each(solutions, function(solution) {
			if (solution.id == prefKey) {
				found = true;
			}
		});
		if (found) {
			result.applications[prefKey] = preferences.applications[prefKey];
			result.applications[prefKey].active = true;
		}
	});
	return result;
}
