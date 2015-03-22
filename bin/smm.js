#!/usr/bin/env node

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

var fluid = require("universal"),
    kettle = fluid.registerNamespace("kettle");

fluid.require("../lib/StatisticalMatchMaker.js", require);

kettle.config.makeConfigLoader({
    nodeEnv: kettle.config.getNodeEnv(),
    configPath: kettle.config.getConfigPath() ||
        require("path").resolve(__dirname, "../configs")
});

