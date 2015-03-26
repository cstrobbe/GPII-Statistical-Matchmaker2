# Statistical Matchmaker: Runtime Component for Cloud4all Second Pilot

This is an archived version of the runtime component of the 
Cloud4all Statistical Matchmaker (STMM) as it was in November 2014. 

See the [initial commit in REMEXLabs/GPII-Statistical-Matchmaker](https://github.com/REMEXLabs/GPII-Statistical-Matchmaker/tree/be6ea4601355653a0d62bbb86354e4f93c0e192b).

For testing GPII/Cloud4all, you should always use the [current version of the Statistical Matchmaker](https://github.com/REMEXLabs/GPII-Statistical-Matchmaker).

## Dependencies

* The [pilots2 branch of GPII's real-time framework ("universal")](https://github.com/GPII/universal/tree/pilots2)

## Installation Instructions

You will need Node.js and npm: 

    npm install

## Running the Statistical Matchmaker

    node bin/smm.js

Per default, using the Debug environment, the matchmaker will listen on port 8077. You can change that in configs/development.json

## Testing the Statistical Matchmaker
	
Usage example using [curl](http://curl.haxx.se/):

	curl -X POST -H "Content-Type: application/json" localhost:8077/match -d @some_preference_set.json

You can also use the sample payloads in the folder `testsamples`. For example: 

	curl -X POST -H "Content-Type: application/json" localhost:8077/match -d @testsamples/03c01e3e-ae46-4ed8-a9d9-763a98944f25.json

## Funding Acknowledgement

The research leading to these results has received funding from the European
Union's Seventh Framework Programme (FP7/2007-2013) under grant agreement No.289016
([Cloud4all](http://www.cloud4all.info/)).

