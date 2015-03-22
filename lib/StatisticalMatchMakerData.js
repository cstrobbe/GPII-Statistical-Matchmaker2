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

//Generated 09 Jun 14:26:50
var fluid = fluid || require("universal");
var stat = fluid.registerNamespace("gpii.matchMaker.statistical");
stat.entryCount = 122;
stat.clusters = [
	{
		"org.nvda-project": {
			"braille.display": "freedomscientific",
			"speech.synth": "silence",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 1,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 0,
			"speech.espeak.pitch": 40
		},
		"org.gnome.orca": {
			"enableBraille": true,
			"enableSpeech": false,
			"voices.default.rate": 1,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "default",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 0,
			"voices.default.average-pitch": 4
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": false
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": true,
			"screenReaderTTSEnabled": false,
			"speechRate": 40,
			"punctuationVerbosity": "some",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 0,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 4
		},
		"com.android.persistentConfiguration": {
			"locale": "en"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 0
		},
		"com.android.settings.secure": {
			"tts_default_rate": 0,
			"tts_default_pitch": 200
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 1,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 100,
			"speech.espeak.pitch": 0
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 1,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 10,
			"voices.default.average-pitch": 0
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 50,
			"punctuationVerbosity": "none",
			"announceCapitals": true,
			"keyEcho": false,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 0,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 0
		},
		"com.android.persistentConfiguration": {
			"locale": "en"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 0
		},
		"com.android.settings.secure": {
			"tts_default_rate": 1,
			"tts_default_pitch": 0
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 85,
			"speech.espeak.pitch": 10
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 1,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 8.5,
			"voices.default.average-pitch": 1
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 50,
			"punctuationVerbosity": "some",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 0.5,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 1
		},
		"com.android.persistentConfiguration": {
			"locale": "en_gb"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 12.75
		},
		"com.android.settings.secure": {
			"tts_default_rate": 20,
			"tts_default_pitch": 50
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en-us",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 70,
			"speech.espeak.pitch": 20
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 1,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english-us",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 7,
			"voices.default.average-pitch": 2
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 50,
			"punctuationVerbosity": "most",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 0.75,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 2
		},
		"com.android.persistentConfiguration": {
			"locale": "en_us"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 10.5
		},
		"com.android.settings.secure": {
			"tts_default_rate": 30,
			"tts_default_pitch": 100
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en-rp",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 55,
			"speech.espeak.pitch": 30
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 1,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english_rp",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 5.5,
			"voices.default.average-pitch": 3
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 50,
			"punctuationVerbosity": "all",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 1,
			"access_commonprefs_punctuation": "all",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 3
		},
		"com.android.persistentConfiguration": {
			"locale": "en"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 8.25
		},
		"com.android.settings.secure": {
			"tts_default_rate": 40,
			"tts_default_pitch": 150
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en-sc",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 40,
			"speech.espeak.pitch": 40
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 1,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "en-scottish",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 4,
			"voices.default.average-pitch": 4
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 50,
			"punctuationVerbosity": "some",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 1.5,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 4
		},
		"com.android.persistentConfiguration": {
			"locale": "en"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 6
		},
		"com.android.settings.secure": {
			"tts_default_rate": 60,
			"tts_default_pitch": 200
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en-wi",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 25,
			"speech.espeak.pitch": 50
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 0,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "en-westindies",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 2.5,
			"voices.default.average-pitch": 5
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 50,
			"punctuationVerbosity": "none",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 2,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 5
		},
		"com.android.persistentConfiguration": {
			"locale": "en"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 3.75
		},
		"com.android.settings.secure": {
			"tts_default_rate": 80,
			"tts_default_pitch": 250
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en-wi",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 55,
			"speech.espeak.pitch": 60,
			"presentation.reportTooltips": false
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 0,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "en-westindies",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 5.5,
			"voices.default.average-pitch": 6,
			"presentToolTips": false
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 0,
			"speech.espeak.voice": "en\\en-wi",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 40,
			"speech.espeak.pitch": 70,
			"presentation.reportHelpBalloons": false
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 0,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "en-westindies",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 4,
			"voices.default.average-pitch": 7,
			"enableTutorialMessages": false
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 3.23,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 10,
			"speech.espeak.pitch": 90
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 6.25,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 1,
			"voices.default.average-pitch": 9
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "de"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "de"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 54,
			"punctuationVerbosity": "most",
			"announceCapitals": true,
			"keyEcho": false,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 2.25,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 9
		},
		"com.android.persistentConfiguration": {
			"locale": "de"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 1.5
		},
		"com.android.settings.secure": {
			"tts_default_rate": 90,
			"tts_default_pitch": 450
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 3.23,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 25,
			"speech.espeak.pitch": 100,
			"presentation.reportTooltips": true
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 6.25,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 2.5,
			"voices.default.average-pitch": 10,
			"presentToolTips": true
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 3.23,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 10,
			"speech.espeak.pitch": 10,
			"presentation.reportHelpBalloons": false
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 6.25,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 1,
			"voices.default.average-pitch": 1,
			"enableTutorialMessages": false
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 6.45,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 95,
			"speech.espeak.pitch": 20
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 12.5,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 9.5,
			"voices.default.average-pitch": 2
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "de"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "de"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 61,
			"punctuationVerbosity": "all",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 2.5,
			"access_commonprefs_punctuation": "all",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 2
		},
		"com.android.persistentConfiguration": {
			"locale": "de_de"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 14.25
		},
		"com.android.settings.secure": {
			"tts_default_rate": 100,
			"tts_default_pitch": 100
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 6.45,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 95,
			"speech.espeak.pitch": 30,
			"presentation.reportTooltips": false
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 12.5,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 9.5,
			"voices.default.average-pitch": 3,
			"presentToolTips": false
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 6.45,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 80,
			"speech.espeak.pitch": 40,
			"presentation.reportHelpBalloons": true
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 12.5,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 8,
			"voices.default.average-pitch": 4,
			"enableTutorialMessages": true
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 12.9,
			"speech.espeak.voice": "el",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 80,
			"speech.espeak.pitch": 50
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 25,
			"voices.default.family.locale": "el",
			"voices.default.family.name": "greek",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 8,
			"voices.default.average-pitch": 5
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "el"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "el"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 73.5,
			"punctuationVerbosity": "none",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 3,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 5
		},
		"com.android.persistentConfiguration": {
			"locale": "el"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 12
		},
		"com.android.settings.secure": {
			"tts_default_rate": 120,
			"tts_default_pitch": 250
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 12.9,
			"speech.espeak.voice": "el",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 65,
			"speech.espeak.pitch": 60,
			"presentation.reportTooltips": true
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 25,
			"voices.default.family.locale": "el",
			"voices.default.family.name": "greek",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 6.5,
			"voices.default.average-pitch": 6,
			"presentToolTips": true
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 12.9,
			"speech.espeak.voice": "el",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 50,
			"speech.espeak.pitch": 70,
			"presentation.reportHelpBalloons": true
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 25,
			"voices.default.family.locale": "el",
			"voices.default.family.name": "greek",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 5,
			"voices.default.average-pitch": 7,
			"enableTutorialMessages": true
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 17.74,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 65,
			"speech.espeak.pitch": 80
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 34.38,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 6.5,
			"voices.default.average-pitch": 8
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "es"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "es"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 83,
			"punctuationVerbosity": "some",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 3.38,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 8
		},
		"com.android.persistentConfiguration": {
			"locale": "es"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 9.75
		},
		"com.android.settings.secure": {
			"tts_default_rate": 135,
			"tts_default_pitch": 400
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 17.74,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 35,
			"speech.espeak.pitch": 90,
			"presentation.reportTooltips": false
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 34.38,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 3.5,
			"voices.default.average-pitch": 9,
			"presentToolTips": false
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 17.74,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 20,
			"speech.espeak.pitch": 100,
			"presentation.reportHelpBalloons": false
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 34.38,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 2,
			"voices.default.average-pitch": 10,
			"enableTutorialMessages": false
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 22.58,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 50,
			"speech.espeak.pitch": 10
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 43.75,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 5,
			"voices.default.average-pitch": 1
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "es"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "es"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 93,
			"punctuationVerbosity": "most",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 3.75,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 5
		},
		"com.android.persistentConfiguration": {
			"locale": "es_es"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 7.5
		},
		"com.android.settings.secure": {
			"tts_default_rate": 150,
			"tts_default_pitch": 100
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 22.58,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 5,
			"speech.espeak.pitch": 200,
			"presentation.reportTooltips": true
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 43.75,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 0.5,
			"voices.default.average-pitch": 2,
			"presentToolTips": true
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 22.58,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 90,
			"speech.espeak.pitch": 30,
			"presentation.reportHelpBalloons": true
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 43.75,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 9,
			"voices.default.average-pitch": 3,
			"enableTutorialMessages": true
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 25.81,
			"speech.espeak.voice": "fr",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 35,
			"speech.espeak.pitch": 40
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 50,
			"voices.default.family.locale": "fr",
			"voices.default.family.name": "french",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 3.5,
			"voices.default.average-pitch": 4
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "fr"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "fr"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 99,
			"punctuationVerbosity": "all",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 4.03,
			"access_commonprefs_punctuation": "all",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 4
		},
		"com.android.persistentConfiguration": {
			"locale": "fr"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 5.25
		},
		"com.android.settings.secure": {
			"tts_default_rate": 160,
			"tts_default_pitch": 200
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 30,
			"speech.espeak.voice": "it",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 20,
			"speech.espeak.pitch": 50
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 54.33,
			"voices.default.family.locale": "it",
			"voices.default.family.name": "italian",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 2,
			"voices.default.average-pitch": 5
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "it"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "it"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 107.5,
			"punctuationVerbosity": "none",
			"announceCapitals": true,
			"keyEcho": false,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 4.33,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 5
		},
		"com.android.persistentConfiguration": {
			"locale": "it"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 3
		},
		"com.android.settings.secure": {
			"tts_default_rate": 173,
			"tts_default_pitch": 250
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 33.55,
			"speech.espeak.voice": "nl",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 5,
			"speech.espeak.pitch": 60
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 58,
			"voices.default.family.locale": "nl",
			"voices.default.family.name": "dutch",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 0.5,
			"voices.default.average-pitch": 6
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "nl"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "nl"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 114.5,
			"punctuationVerbosity": "some",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 4.6,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 6
		},
		"com.android.persistentConfiguration": {
			"locale": "no"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 0.75
		},
		"com.android.settings.secure": {
			"tts_default_rate": 184,
			"tts_default_pitch": 300
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 38.71,
			"speech.espeak.voice": "zh",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 90,
			"speech.espeak.pitch": 70
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 63.33,
			"voices.default.family.locale": "zh",
			"voices.default.family.name": "mandarin",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 9,
			"voices.default.average-pitch": 7
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "zh"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "zh"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 125,
			"punctuationVerbosity": "most",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 5,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 7
		},
		"com.android.persistentConfiguration": {
			"locale": "zh_cn"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 13.5
		},
		"com.android.settings.secure": {
			"tts_default_rate": 200,
			"tts_default_pitch": 350
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 45.16,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 75,
			"speech.espeak.pitch": 80
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 70,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "default",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 7.5,
			"voices.default.average-pitch": 8
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 137.6,
			"punctuationVerbosity": "all",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 5.5,
			"access_commonprefs_punctuation": "all",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 8
		},
		"com.android.persistentConfiguration": {
			"locale": "en"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 11.25
		},
		"com.android.settings.secure": {
			"tts_default_rate": 220,
			"tts_default_pitch": 400
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 54.84,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 60,
			"speech.espeak.pitch": 90
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 80,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 6,
			"voices.default.average-pitch": 9
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 157,
			"punctuationVerbosity": "none",
			"announceCapitals": true,
			"keyEcho": false,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 6.25,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 9
		},
		"com.android.persistentConfiguration": {
			"locale": "en_gb"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 9
		},
		"com.android.settings.secure": {
			"tts_default_rate": 250,
			"tts_default_pitch": 450
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 64.52,
			"speech.espeak.voice": "en\\en-us",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 45,
			"speech.espeak.pitch": 10
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 90,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english-us",
			"verbalizePunctuationStyle": 2,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 4.5,
			"voices.default.average-pitch": 10
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 176,
			"punctuationVerbosity": "some",
			"announceCapitals": true,
			"keyEcho": false,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 7,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 10
		},
		"com.android.persistentConfiguration": {
			"locale": "en_us"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 6.75
		},
		"com.android.settings.secure": {
			"tts_default_rate": 280,
			"tts_default_pitch": 500
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 74.19,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 30,
			"speech.espeak.pitch": 10
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 3,
			"voices.default.average-pitch": 1
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "de"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "de"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 195,
			"punctuationVerbosity": "most",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 7.75,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 1
		},
		"com.android.persistentConfiguration": {
			"locale": "de"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 4.5
		},
		"com.android.settings.secure": {
			"tts_default_rate": 310,
			"tts_default_pitch": 50
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 77.42,
			"speech.espeak.voice": "de",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 300,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 15,
			"speech.espeak.pitch": 20
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "de",
			"voices.default.family.name": "german",
			"verbalizePunctuationStyle": 0,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": false,
			"voices.default.gain": 1.5,
			"voices.default.average-pitch": 2
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "de"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "de"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 202,
			"punctuationVerbosity": "all",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 8,
			"access_commonprefs_punctuation": "all",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 0,
			"access_commonprefs_speechpitch": 2
		},
		"com.android.persistentConfiguration": {
			"locale": "de_de"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 2.25
		},
		"com.android.settings.secure": {
			"tts_default_rate": 320,
			"tts_default_pitch": 100
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 90.32,
			"speech.espeak.voice": "el",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 0,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": false,
			"speech.espeak.volume": 100,
			"speech.espeak.pitch": 30
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "el",
			"voices.default.family.name": "greek",
			"verbalizePunctuationStyle": 3,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": false,
			"voices.default.gain": 10,
			"voices.default.average-pitch": 3
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "el"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "el"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 360,
			"punctuationVerbosity": "none",
			"announceCapitals": false,
			"keyEcho": true,
			"wordEcho": false
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 9,
			"access_commonprefs_punctuation": "none",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 1,
			"access_commonprefs_speechpitch": 3
		},
		"com.android.persistentConfiguration": {
			"locale": "el"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 15
		},
		"com.android.settings.secure": {
			"tts_default_rate": 227.5,
			"tts_default_pitch": 150
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 100,
			"speech.espeak.voice": "es",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 100,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": false,
			"keyboard.speakTypedCharacters": false,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 85,
			"speech.espeak.pitch": 40
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "es",
			"voices.default.family.name": "spanish",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": false,
			"enableEchoByWord": true,
			"voices.default.gain": 8.5,
			"voices.default.average-pitch": 4
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "es"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "es"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 247.5,
			"punctuationVerbosity": "some",
			"announceCapitals": false,
			"keyEcho": false,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 9.75,
			"access_commonprefs_punctuation": "some",
			"access_commonprefs_capitalization": false,
			"access_commonprefs_editingkeyboardecho": 2,
			"access_commonprefs_speechpitch": 4
		},
		"com.android.persistentConfiguration": {
			"locale": "es"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 12.75
		},
		"com.android.settings.secure": {
			"tts_default_rate": 390,
			"tts_default_pitch": 200
		}
	},
	{
		"org.nvda-project": {
			"braille.display": "nobraille",
			"speech.synth": "espeak",
			"speech.outputDevice": "microsoft sound mapper",
			"speech.espeak.rate": 100,
			"speech.espeak.voice": "en\\en",
			"reviewCursor.followFocus": true,
			"reviewCursor.followCaret": true,
			"reviewCursor.followMouse": true,
			"speech.symbolLevel": 200,
			"virtualBuffers.autoSayAllOnPageLoad": true,
			"speech.espeak.sayCapForCapitals": true,
			"keyboard.speakTypedCharacters": true,
			"keyboard.speakTypedWords": true,
			"speech.espeak.volume": 70,
			"speech.espeak.pitch": 50
		},
		"org.gnome.orca": {
			"enableBraille": false,
			"enableSpeech": true,
			"voices.default.rate": 100,
			"voices.default.family.locale": "en",
			"voices.default.family.name": "english",
			"verbalizePunctuationStyle": 1,
			"sayAllStyle": 1,
			"enableEchoByCharacter": true,
			"enableEchoByWord": true,
			"voices.default.gain": 7,
			"voices.default.average-pitch": 5
		},
		"org.gnome.desktop.a11y": {
			"always-show-universal-access-status": true
		},
		"webinsight.webAnywhere.windows": {
			"locale": "en"
		},
		"webinsight.webAnywhere.linux": {
			"locale": "en"
		},
		"org.chrome.cloud4chrome": {
			"screenReaderTTSEnabled": true
		},
		"com.yourdolphin.supernova-as": {
			"screenReaderBrailleOutput": false,
			"screenReaderTTSEnabled": true,
			"speechRate": 253,
			"punctuationVerbosity": "most",
			"announceCapitals": true,
			"keyEcho": true,
			"wordEcho": true
		},
		"es.codefactory.android.app.ma": {
			"access_commonprefs_speechrate": 10,
			"access_commonprefs_punctuation": "most",
			"access_commonprefs_capitalization": true,
			"access_commonprefs_editingkeyboardecho": 3,
			"access_commonprefs_speechpitch": 5
		},
		"com.android.persistentConfiguration": {
			"locale": "en"
		},
		"com.android.audioManager": {
			"STREAM_MUSIC": 10.5
		},
		"com.android.settings.secure": {
			"tts_default_rate": 400,
			"tts_default_pitch": 250
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 0
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 0
		},
		"info.cloud4all.JME": {
			"language": "english",
			"volume": 1
		},
		"net.gpii.smarthouses": {
			"volume": 0
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 6.6
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 1
		},
		"info.cloud4all.JME": {
			"volume": 6.6
		},
		"net.gpii.smarthouses": {
			"volume": 0.06
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 13.3
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 2
		},
		"info.cloud4all.JME": {
			"volume": 13.3
		},
		"net.gpii.smarthouses": {
			"volume": 0.13
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 26.6
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 4
		},
		"info.cloud4all.JME": {
			"volume": 26.6
		},
		"net.gpii.smarthouses": {
			"volume": 0.26
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 33.3
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 5
		},
		"info.cloud4all.JME": {
			"volume": 33.3
		},
		"net.gpii.smarthouses": {
			"volume": 0.33
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 40
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 6
		},
		"info.cloud4all.JME": {
			"volume": 40
		},
		"net.gpii.smarthouses": {
			"volume": 0.4
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 46.6
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 7
		},
		"info.cloud4all.JME": {
			"volume": 46.6
		},
		"net.gpii.smarthouses": {
			"volume": 0.47
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 53.3
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 8
		},
		"info.cloud4all.JME": {
			"volume": 53.3
		},
		"net.gpii.smarthouses": {
			"volume": 0.53
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 60
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 9
		},
		"info.cloud4all.JME": {
			"volume": 60
		},
		"net.gpii.smarthouses": {
			"volume": 0.6
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 66.7
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 10
		},
		"info.cloud4all.JME": {
			"volume": 66.7
		},
		"net.gpii.smarthouses": {
			"volume": 0.67
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 73.3
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 11
		},
		"info.cloud4all.JME": {
			"volume": 73.3
		},
		"net.gpii.smarthouses": {
			"volume": 0.73
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 80
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 12
		},
		"info.cloud4all.JME": {
			"volume": 80
		},
		"net.gpii.smarthouses": {
			"volume": 0.8
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 86.7
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 13
		},
		"info.cloud4all.JME": {
			"volume": 86.7
		},
		"net.gpii.smarthouses": {
			"volume": 0.87
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 93.3
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 14
		},
		"info.cloud4all.JME": {
			"volume": 93.3
		},
		"net.gpii.smarthouses": {
			"volume": 0.93
		}
	},
	{
		"org.alsa-project": {
			"masterVolume": 100
		},
		"com.android.audioManager": {
			"STREAM_SYSTEM": 15
		},
		"info.cloud4all.JME": {
			"volume": 100
		},
		"net.gpii.smarthouses": {
			"volume": 1
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 100,
			"MagnificationMode": 2,
			"Invert": true
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1,
			"invert-lightness": true,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"org.chrome.cloud4chrome": {
			"invertColours": true
		},
		"com.android.settings.system": {
			"brightness": 100
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 110,
			"MagnificationMode": 2,
			"Invert": true
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.1,
			"invert-lightness": true,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"org.chrome.cloud4chrome": {
			"invertColours": true,
			"magnifierEnabled": true,
			"magnification": 1.1
		},
		"com.android.settings.system": {
			"brightness": 100
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail.cur",
			"Hand": "%systemroot%\\cursors\\aero_link.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 0.9,
			"cursor-size": -1
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail.cur",
			"Hand": "%systemroot%\\cursors\\aero_link.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"cursor-size": 24
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail.cur",
			"Hand": "%systemroot%\\cursors\\aero_link.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"cursor-size": 12
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.2,
			"cursor-size": 29
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.3,
			"cursor-size": 32
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.4,
			"cursor-size": 36
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_xl.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_xl.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_xl.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_xl.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_xl.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_xl.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_xl.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_xl.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_xl.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_xl.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_xl.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_xl.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_xl.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.6,
			"cursor-size": 41
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_xl.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_xl.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_xl.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_xl.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_xl.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_xl.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_xl.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_xl.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_xl.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_xl.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_xl.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_xl.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_xl.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.7,
			"cursor-size": 42
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_xl.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_xl.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_xl.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_xl.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_xl.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_xl.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_xl.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_xl.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_xl.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_xl.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_xl.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_xl.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_xl.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.8,
			"cursor-size": 43
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail.cur",
			"Hand": "%systemroot%\\cursors\\aero_link.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"cursor-size": 24
		},
		"net.gpii.smarthouses": {
			"fontSize": 18
		},
		"info.cloud4all.JME": {
			"fontSize": "small"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 24
		},
		"org.chrome.cloud4chrome": {
			"fontSize": "medium"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal"
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail.cur",
			"Hand": "%systemroot%\\cursors\\aero_link.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.16,
			"cursor-size": 26
		},
		"net.gpii.smarthouses": {
			"fontSize": 21
		},
		"info.cloud4all.JME": {
			"fontSize": "medium"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.16
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 28
		},
		"org.chrome.cloud4chrome": {
			"fontSize": "large"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal"
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.25,
			"cursor-size": 32
		},
		"net.gpii.smarthouses": {
			"fontSize": 22
		},
		"info.cloud4all.JME": {
			"fontSize": "medium"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.25
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 30
		},
		"org.chrome.cloud4chrome": {
			"fontSize": "large"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "large"
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.33,
			"cursor-size": 34
		},
		"net.gpii.smarthouses": {
			"fontSize": 24
		},
		"info.cloud4all.JME": {
			"fontSize": "medium"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.33
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 32
		},
		"org.chrome.cloud4chrome": {
			"fontSize": "large"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "large"
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.5,
			"cursor-size": 38
		},
		"net.gpii.smarthouses": {
			"fontSize": 24
		},
		"info.cloud4all.JME": {
			"fontSize": "medium"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.33
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 32
		},
		"org.chrome.cloud4chrome": {
			"fontSize": "large"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "large"
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_l.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_l.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_l.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_l.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_l.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_l.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_l.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_l.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_l.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_l.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_l.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_l.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_l.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1.66,
			"cursor-size": 40
		},
		"net.gpii.smarthouses": {
			"fontSize": 30
		},
		"info.cloud4all.JME": {
			"fontSize": "medium"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.66
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 40
		},
		"org.chrome.cloud4chrome": {
			"fontSize": "x-large"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "large"
		}
	},
	{
		"com.microsoft.windows.cursors": {
			"No": "%systemroot%\\cursors\\aero_unavail_xl.cur",
			"Hand": "%systemroot%\\cursors\\aero_link_xl.cur",
			"Help": "%systemroot%\\cursors\\aero_helpsel_xl.cur",
			"Wait": "%systemroot%\\cursors\\aero_busy_xl.ani",
			"Arrow": "%systemroot%\\cursors\\aero_arrow_xl.cur",
			"NWPen": "%systemroot%\\cursors\\aero_pen_xl.cur",
			"SizeAll": "%systemroot%\\cursors\\aero_move_xl.cur",
			"SizeNESW": "%systemroot%\\cursors\\aero_nesw_xl.cur",
			"SizeNWSE": "%systemroot%\\cursors\\aero_nwse_xl.cur",
			"SizeNS": "%systemroot%\\cursors\\aero_ns_xl.cur",
			"SizeWE": "%systemroot%\\cursors\\aero_ew_xl.cur",
			"AppStarting": "%systemroot%\\cursors\\aero_working_xl.ani",
			"UpArrow": "%systemroot%\\cursors\\aero_up_xl.cur"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 2,
			"cursor-size": 48
		},
		"net.gpii.smarthouses": {
			"fontSize": 32
		},
		"info.cloud4all.JME": {
			"fontSize": "large"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 48
		},
		"org.chrome.cloud4chrome": {
			"fontSize": "x-large"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "large"
		}
	},
	{
		"info.cloud4all.JME": {
			"language": "english",
			"fontSize": "large",
			"theme": "black-white"
		},
		"net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"highContrastTheme": "black-white",
			"language": "en"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"gtk-theme": "highcontrast",
			"icon-theme": "highcontrast"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal",
			"highContrastEnabled": true,
			"screenReaderTTSEnabled": false
		},
		"com.microsoft.windows.highContrast": {
			"HighContrastOn": "pvparam.dwflags.hcf_highcontraston"
		},
		"net.opendirective.maavis": {
			"theme": "bw"
		},
		"org.chrome.cloud4chrome": {
			"highContrastEnabled": true,
			"highContrastTheme": "black-white"
		}
	},
	{
		"info.cloud4all.JME": {
			"language": "english",
			"fontSize": "large",
			"theme": "white-black"
		},
		"net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"highContrastTheme": "white-black",
			"language": "en"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"gtk-theme": "highcontrast",
			"icon-theme": "highcontrast"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal",
			"highContrastEnabled": true,
			"screenReaderTTSEnabled": false
		},
		"com.microsoft.windows.highContrast": {
			"HighContrastOn": "pvparam.dwflags.hcf_highcontraston"
		},
		"net.opendirective.maavis": {
			"theme": "bw"
		},
		"org.chrome.cloud4chrome": {
			"highContrastEnabled": true,
			"highContrastTheme": "white-black"
		},
		"se.omnitor.ecmobile": {
			"map.string.theme.$t": "yellow-black"
		}
	},
	{
		"info.cloud4all.JME": {
			"language": "english",
			"fontSize": "large",
			"theme": "yellow-black"
		},
		"net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"highContrastTheme": "yellow-black",
			"language": "en"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"gtk-theme": "highcontrast",
			"icon-theme": "highcontrast"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal",
			"highContrastEnabled": true,
			"screenReaderTTSEnabled": false
		},
		"com.microsoft.windows.highContrast": {
			"HighContrastOn": "pvparam.dwflags.hcf_highcontraston"
		},
		"net.opendirective.maavis": {
			"theme": "hc"
		},
		"org.chrome.cloud4chrome": {
			"highContrastEnabled": true,
			"highContrastTheme": "yellow-black"
		},
		"se.omnitor.ecmobile": {
			"map.string.theme.$t": "yellow-black"
		}
	},
	{
		"info.cloud4all.JME": {
			"language": "english",
			"fontSize": "large",
			"theme": "black-white"
		},
		"net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"highContrastTheme": "black-yellow",
			"language": "en"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"gtk-theme": "highcontrast",
			"icon-theme": "highcontrast"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal",
			"highContrastEnabled": true,
			"screenReaderTTSEnabled": false
		},
		"com.microsoft.windows.highContrast": {
			"HighContrastOn": "pvparam.dwflags.hcf_highcontraston"
		},
		"net.opendirective.maavis": {
			"theme": "hc"
		},
		"org.chrome.cloud4chrome": {
			"highContrastEnabled": true,
			"highContrastTheme": "black-yellow"
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 110,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.1,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.1
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 26.4
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.2,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 120,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.2,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 28.8,
			"map.string.iconsize.$t": 84
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.2,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 130,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.3,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.3
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 31.2,
			"map.string.iconsize.$t": 91
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.3,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 140,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.4,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.4
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 33.6,
			"map.string.iconsize.$t": 98
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.4,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 180,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.8,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.8
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 43.2,
			"map.string.iconsize.$t": 105
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.8,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 16,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 16
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50,
			"map.string.iconsize.$t": 105
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 16,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 220,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.2,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 52.8,
			"map.string.iconsize.$t": 154
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.2,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 230,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.3,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.3
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 55.2,
			"map.string.iconsize.$t": 105
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.3,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 24,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 24
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50,
			"map.string.iconsize.$t": 105
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 24,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 32,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 32
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50,
			"map.string.iconsize.$t": 105
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 32,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 32,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 48
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50,
			"map.string.iconsize.$t": 105
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 48,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 2,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 32,
			"screen-position": "full-screen",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 60
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50,
			"map.string.iconsize.$t": 105
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 60,
			"magnifierPosition": "fullscreen"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 120,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.2,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 28.8
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.2,
			"magnifierPosition": "bottomhalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 160,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.6,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 38.4
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.6,
			"magnifierPosition": "bottomhalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 180,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.8,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.8
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 43.2
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.8,
			"magnifierPosition": "bottomhalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 16,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 16
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 16,
			"magnifierPosition": "bottomhalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 200,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 48
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2,
			"magnifierPosition": "bottomhalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 220,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.2,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 52.8
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.2,
			"magnifierPosition": "bottomhalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 260,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.6,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.6,
			"magnifierPosition": "bottomhalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 400,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 4,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 4
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 4,
			"magnifierPosition": "bottomhalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 600,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 6,
			"screen-position": "bottom-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 6,
			"magnifierPosition": "bottomhalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 120,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.2,
			"screen-position": "left-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 28.8
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.2,
			"magnifierPosition": "lefthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 160,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.6,
			"screen-position": "left-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 38.4
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.6,
			"magnifierPosition": "lefthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 180,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.8,
			"screen-position": "left-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.8
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 43.2
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.8,
			"magnifierPosition": "lefthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 16,
			"screen-position": "left-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 16
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 16,
			"magnifierPosition": "lefthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 200,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2,
			"screen-position": "left-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 48
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2,
			"magnifierPosition": "lefthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 220,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.2,
			"screen-position": "left-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 52.8
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.2,
			"magnifierPosition": "lefthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 260,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.6,
			"screen-position": "left-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.6,
			"magnifierPosition": "lefthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 400,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 4,
			"screen-position": "left-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 4
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 4,
			"magnifierPosition": "lefthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 600,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 6,
			"screen-position": "left-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 6,
			"magnifierPosition": "lefthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 110,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.1,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.1
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 26.4,
			"map.string.iconsize.$t": 84
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.2,
			"magnifierPosition": "lens"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 130,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.3,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.3
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 31.2
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.3,
			"magnifierPosition": "lens"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 150,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.5,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.5
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 36
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.5,
			"magnifierPosition": "lens"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 175,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.75,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.75
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 42
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.75,
			"magnifierPosition": "lens"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 16,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"com.android.persistentConfiguration": {
			"fontScale": 16
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 16,
			"magnifierPosition": "lens"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 250,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.5,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.5
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.5,
			"magnifierPosition": "lens"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 24,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"com.android.persistentConfiguration": {
			"fontScale": 24
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 24,
			"magnifierPosition": "lens"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 400,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 4,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"com.android.persistentConfiguration": {
			"fontScale": 4
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 4,
			"magnifierPosition": "lens"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 800,
			"MagnificationMode": 3,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 8,
			"screen-position": "top-half",
			"mouse-tracking": "proportional",
			"lens-mode": true
		},
		"com.android.persistentConfiguration": {
			"fontScale": 8
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 8,
			"magnifierPosition": "lens"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 120,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.2,
			"screen-position": "right-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 28.8
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.2,
			"magnifierPosition": "righthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 160,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.6,
			"screen-position": "right-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 38.4
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.6,
			"magnifierPosition": "righthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 180,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.8,
			"screen-position": "right-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.8
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 43.2
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.8,
			"magnifierPosition": "righthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 16,
			"screen-position": "right-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 16
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 16,
			"magnifierPosition": "righthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 200,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2,
			"screen-position": "right-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 48
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2,
			"magnifierPosition": "righthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 220,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.2,
			"screen-position": "right-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 52.8
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.2,
			"magnifierPosition": "righthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 260,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.6,
			"screen-position": "right-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.6,
			"magnifierPosition": "righthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 400,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 4,
			"screen-position": "right-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 4
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 4,
			"magnifierPosition": "righthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 600,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 6,
			"screen-position": "right-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 6,
			"magnifierPosition": "righthalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 120,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.2,
			"screen-position": "top-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 28.8
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.2,
			"magnifierPosition": "tophalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 160,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.6,
			"screen-position": "top-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 38.4
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.6,
			"magnifierPosition": "tophalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 180,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1.8,
			"screen-position": "top-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 1.8
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 43.2
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 1.8,
			"magnifierPosition": "tophalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 1600,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 16,
			"screen-position": "top-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 16
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 16,
			"magnifierPosition": "tophalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 200,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2,
			"screen-position": "top-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 48
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2,
			"magnifierPosition": "tophalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 220,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.2,
			"screen-position": "top-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.2
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 52.8
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.2,
			"magnifierPosition": "tophalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 260,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 2.6,
			"screen-position": "top-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 2.6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 2.6,
			"magnifierPosition": "tophalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 400,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 4,
			"screen-position": "top-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 4
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 4,
			"magnifierPosition": "tophalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.magnifier": {
			"Magnification": 600,
			"MagnificationMode": 1,
			"FollowFocus": 1,
			"FollowCaret": 1,
			"FollowMouse": 1
		},
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 6,
			"screen-position": "top-half",
			"mouse-tracking": "proportional"
		},
		"com.android.persistentConfiguration": {
			"fontScale": 6
		},
		"se.omnitor.ecmobile": {
			"map.string.fontsize.$t": 50
		},
		"com.yourdolphin.supernova-as": {
			"magnifierEnabled": true,
			"magnification": 6,
			"magnifierPosition": "tophalf"
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.microsoft.windows.mouseTrailing": {
			"MouseTrails": false
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": false
		},
		"org.gnome.desktop.a11y.magnifier": {
			"show-cross-hairs": false
		}
	},
	{
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1,
			"show-cross-hairs": true,
			"cross-hairs-length": 20,
			"cross-hairs-thickness": 2
		},
		"com.microsoft.windows.mouseTrailing": {
			"MouseTrails": true
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"org.gnome.desktop.a11y.magnifier": {
			"mag-factor": 1,
			"show-cross-hairs": true,
			"cross-hairs-length": 22,
			"cross-hairs-thickness": 2
		},
		"com.microsoft.windows.mouseTrailing": {
			"MouseTrails": true
		},
		"org.gnome.desktop.a11y.applications": {
			"screen-magnifier-enabled": true
		}
	},
	{
		"com.android.persistentConfiguration": {
			"locale": "en",
			"fontScale": 1
		},
		"info.cloud4all.JME": {
			"language": "english",
			"volume": 50,
			"fontSize": "medium",
			"theme": "black-white",
			"hapticFeedback": 2
		},
		"net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"language": "en"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"gtk-theme": "adwaita",
			"icon-theme": "gnome"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal",
			"highContrastEnabled": false,
			"screenReaderTTSEnabled": false
		},
		"net.opendirective.maavis": {
			"theme": "colour"
		},
		"se.omnitor.ecmobile": {
			"fontsize": 24,
			"theme": "none",
			"iconsize": 70
		}
	},
	{
		"com.android.persistentConfiguration": {
			"locale": "el",
			"fontScale": 1
		},
		"info.cloud4all.JME": {
			"language": "greek",
			"volume": 50,
			"fontSize": "medium",
			"theme": "black-white",
			"hapticFeedback": 2
		},
		"net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"language": "el"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"gtk-theme": "adwaita",
			"icon-theme": "gnome"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal",
			"highContrastEnabled": false,
			"screenReaderTTSEnabled": false
		},
		"net.opendirective.maavis": {
			"theme": "colour"
		},
		"se.omnitor.ecmobile": {
			"fontsize": 24,
			"theme": "none",
			"iconsize": 70
		}
	},
	{
		"com.android.persistentConfiguration": {
			"locale": "en_gb",
			"fontScale": 1
		},
		"info.cloud4all.JME": {
			"language": "english",
			"volume": 50,
			"fontSize": "medium",
			"theme": "black-white",
			"hapticFeedback": 2
		},
		"net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"language": "en-gb"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"gtk-theme": "adwaita",
			"icon-theme": "gnome"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal",
			"highContrastEnabled": false,
			"screenReaderTTSEnabled": false
		},
		"net.opendirective.maavis": {
			"theme": "colour"
		},
		"se.omnitor.ecmobile": {
			"fontsize": 24,
			"theme": "none",
			"iconsize": 70
		}
	},
	{
		"com.android.persistentConfiguration": {
			"locale": "es",
			"fontScale": 1
		},
		"info.cloud4all.JME": {
			"language": "spanish",
			"volume": 50,
			"fontSize": "medium",
			"theme": "black-white",
			"hapticFeedback": 2
		},
		"net.gpii.smarthouses": {
			"volume": 50,
			"fontSize": 18,
			"language": "es"
		},
		"org.gnome.desktop.interface": {
			"text-scaling-factor": 1,
			"gtk-theme": "adwaita",
			"icon-theme": "gnome"
		},
		"eu.singularlogic.pixelsense.sociable": {
			"fontSize": "normal",
			"highContrastEnabled": false,
			"screenReaderTTSEnabled": false
		},
		"net.opendirective.maavis": {
			"theme": "colour"
		},
		"se.omnitor.ecmobile": {
			"fontsize": 24,
			"theme": "none",
			"iconsize": 70
		}
	},
	{
		"eu.singularlogic.pixelsense.sociable": {
			"screenReaderTTSEnabled": true
		},
		"net.opendirective.maavis": {
			"speakOnActivate": "yes",
			"speakTitles": "yes",
			"speakLabels": "yes"
		}
	},
	{
		"eu.singularlogic.pixelsense.sociable": {
			"screenReaderTTSEnabled": false
		},
		"net.opendirective.maavis": {
			"speakTitles": "no"
		}
	},
	{
		"eu.singularlogic.pixelsense.sociable": {
			"screenReaderTTSEnabled": true,
			"language": "@@@"
		},
		"net.opendirective.maavis": {
			"speakOnActivate": "yes",
			"speakTitles": "yes",
			"speakLabels": "yes"
		}
	}
];
stat.preferenceTypes = {
	"context": {
		"user": {
			"isEnum": true,
			"min": 0,
			"max": 162
		},
		"os": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"org.nvda-project": {
		"braille.display": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speech.synth": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speech.outputDevice": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"speech.espeak.rate": {
			"isEnum": false,
			"min": 0,
			"max": 100
		},
		"speech.espeak.voice": {
			"isEnum": true,
			"min": 0,
			"max": 12
		},
		"reviewCursor.followFocus": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"reviewCursor.followCaret": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"reviewCursor.followMouse": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"speech.symbolLevel": {
			"isEnum": false,
			"min": 0,
			"max": 300
		},
		"virtualBuffers.autoSayAllOnPageLoad": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"speech.espeak.sayCapForCapitals": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"keyboard.speakTypedCharacters": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"keyboard.speakTypedWords": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speech.espeak.volume": {
			"isEnum": false,
			"min": 0,
			"max": 100
		},
		"speech.espeak.pitch": {
			"isEnum": false,
			"min": 0,
			"max": 200
		},
		"presentation.reportTooltips": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"presentation.reportHelpBalloons": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	},
	"org.gnome.orca": {
		"enableBraille": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"enableSpeech": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"voices.default.rate": {
			"isEnum": false,
			"min": 0,
			"max": 100
		},
		"voices.default.family.locale": {
			"isEnum": true,
			"min": 0,
			"max": 8
		},
		"voices.default.family.name": {
			"isEnum": true,
			"min": 0,
			"max": 13
		},
		"verbalizePunctuationStyle": {
			"isEnum": false,
			"min": 0,
			"max": 3
		},
		"sayAllStyle": {
			"isEnum": false,
			"min": 1,
			"max": 1
		},
		"enableEchoByCharacter": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"enableEchoByWord": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"voices.default.gain": {
			"isEnum": false,
			"min": 0,
			"max": 10
		},
		"voices.default.average-pitch": {
			"isEnum": false,
			"min": 0,
			"max": 10
		},
		"presentToolTips": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"enableTutorialMessages": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	},
	"org.gnome.desktop.a11y": {
		"always-show-universal-access-status": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"webinsight.webAnywhere.windows": {
		"locale": {
			"isEnum": true,
			"min": 0,
			"max": 8
		}
	},
	"webinsight.webAnywhere.linux": {
		"locale": {
			"isEnum": true,
			"min": 0,
			"max": 8
		}
	},
	"org.chrome.cloud4chrome": {
		"screenReaderTTSEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"invertColours": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"magnifierEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"magnification": {
			"isEnum": false,
			"min": 1.1,
			"max": 1.1
		},
		"fontSize": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"highContrastEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"highContrastTheme": {
			"isEnum": true,
			"min": 0,
			"max": 4
		}
	},
	"com.yourdolphin.supernova-as": {
		"screenReaderBrailleOutput": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"screenReaderTTSEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speechRate": {
			"isEnum": false,
			"min": 40,
			"max": 360
		},
		"punctuationVerbosity": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"announceCapitals": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"keyEcho": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"wordEcho": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"magnifierEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"magnification": {
			"isEnum": false,
			"min": 1.2,
			"max": 60
		},
		"magnifierPosition": {
			"isEnum": true,
			"min": 0,
			"max": 6
		}
	},
	"es.codefactory.android.app.ma": {
		"access_commonprefs_speechrate": {
			"isEnum": false,
			"min": 0,
			"max": 10
		},
		"access_commonprefs_punctuation": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"access_commonprefs_capitalization": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"access_commonprefs_editingkeyboardecho": {
			"isEnum": false,
			"min": 0,
			"max": 3
		},
		"access_commonprefs_speechpitch": {
			"isEnum": false,
			"min": 0,
			"max": 10
		}
	},
	"com.android.persistentConfiguration": {
		"locale": {
			"isEnum": true,
			"min": 0,
			"max": 12
		},
		"fontScale": {
			"isEnum": false,
			"min": 1,
			"max": 60
		}
	},
	"com.android.audioManager": {
		"STREAM_MUSIC": {
			"isEnum": false,
			"min": 0,
			"max": 15
		},
		"STREAM_SYSTEM": {
			"isEnum": false,
			"min": 0,
			"max": 15
		}
	},
	"com.android.settings.secure": {
		"tts_default_rate": {
			"isEnum": false,
			"min": 0,
			"max": 400
		},
		"tts_default_pitch": {
			"isEnum": false,
			"min": 0,
			"max": 500
		}
	},
	"org.alsa-project": {
		"masterVolume": {
			"isEnum": false,
			"min": 0,
			"max": 100
		}
	},
	"info.cloud4all.JME": {
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"volume": {
			"isEnum": false,
			"min": 1,
			"max": 100
		},
		"fontSize": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"theme": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"hapticFeedback": {
			"isEnum": false,
			"min": 2,
			"max": 2
		}
	},
	"net.gpii.smarthouses": {
		"volume": {
			"isEnum": false,
			"min": 0,
			"max": 50
		},
		"fontSize": {
			"isEnum": false,
			"min": 18,
			"max": 32
		},
		"highContrastTheme": {
			"isEnum": true,
			"min": 0,
			"max": 4
		},
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 4
		}
	},
	"com.microsoft.windows.magnifier": {
		"Magnification": {
			"isEnum": false,
			"min": 100,
			"max": 1600
		},
		"MagnificationMode": {
			"isEnum": false,
			"min": 1,
			"max": 3
		},
		"Invert": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"FollowFocus": {
			"isEnum": false,
			"min": 1,
			"max": 1
		},
		"FollowCaret": {
			"isEnum": false,
			"min": 1,
			"max": 1
		},
		"FollowMouse": {
			"isEnum": false,
			"min": 1,
			"max": 1
		}
	},
	"org.gnome.desktop.a11y.magnifier": {
		"mag-factor": {
			"isEnum": false,
			"min": 1,
			"max": 32
		},
		"invert-lightness": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"screen-position": {
			"isEnum": true,
			"min": 0,
			"max": 5
		},
		"mouse-tracking": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"lens-mode": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"show-cross-hairs": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"cross-hairs-length": {
			"isEnum": false,
			"min": 20,
			"max": 22
		},
		"cross-hairs-thickness": {
			"isEnum": false,
			"min": 2,
			"max": 2
		}
	},
	"com.android.settings.system": {
		"brightness": {
			"isEnum": false,
			"min": 100,
			"max": 100
		}
	},
	"com.microsoft.windows.mouseTrailing": {
		"MouseTrails": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	},
	"com.microsoft.windows.cursors": {
		"No": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"Hand": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"Help": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"Wait": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"Arrow": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"NWPen": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeAll": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeNESW": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeNWSE": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeNS": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"SizeWE": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"AppStarting": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"UpArrow": {
			"isEnum": true,
			"min": 0,
			"max": 3
		}
	},
	"org.gnome.desktop.interface": {
		"text-scaling-factor": {
			"isEnum": false,
			"min": 0.9,
			"max": 2
		},
		"cursor-size": {
			"isEnum": false,
			"min": -1,
			"max": 48
		},
		"gtk-theme": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"icon-theme": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	},
	"se.omnitor.ecmobile": {
		"map.string.fontsize.$t": {
			"isEnum": false,
			"min": 24,
			"max": 55.2
		},
		"map.string.theme.$t": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"map.string.iconsize.$t": {
			"isEnum": false,
			"min": 84,
			"max": 154
		},
		"fontsize": {
			"isEnum": false,
			"min": 24,
			"max": 24
		},
		"theme": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"iconsize": {
			"isEnum": false,
			"min": 70,
			"max": 70
		}
	},
	"eu.singularlogic.pixelsense.sociable": {
		"fontSize": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"highContrastEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"screenReaderTTSEnabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"language": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"com.microsoft.windows.highContrast": {
		"HighContrastOn": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"net.opendirective.maavis": {
		"theme": {
			"isEnum": true,
			"min": 0,
			"max": 3
		},
		"speakOnActivate": {
			"isEnum": true,
			"min": 0,
			"max": 1
		},
		"speakTitles": {
			"isEnum": true,
			"min": 0,
			"max": 2
		},
		"speakLabels": {
			"isEnum": true,
			"min": 0,
			"max": 1
		}
	},
	"org.gnome.desktop.a11y.applications": {
		"screen-magnifier-enabled": {
			"isEnum": true,
			"min": 0,
			"max": 2
		}
	}
};

