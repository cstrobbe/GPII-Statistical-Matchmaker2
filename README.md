# Statistical Matchmaker: Runtime Component for Cloud4all Second Pilot

This is an archived version of the runtime component of the 
Cloud4all Statistical Matchmaker (STMM) as it was in November 2014. 

See the [initial commit in REMEXLabs/GPII-Statistical-Matchmaker](https://github.com/REMEXLabs/GPII-Statistical-Matchmaker/tree/be6ea4601355653a0d62bbb86354e4f93c0e192b).

## Dependencies

[universal](https://github.com/GPII/universal)

Installation instructions

Firstly, install node and npm.

    npm install
	
## Running the Statistical Matchmaker

    node bin/smm.js
	
Per default, using the Debug environment, the matchmaker will listen on port 80. You can change that in configs/development.json

## Testing the Statistical Matchmaker
	
Usage example using [curl](http://curl.haxx.se/):

	curl -X POST -H "Content-Type: application/json" localhost:80/match -d @[some preference set]

