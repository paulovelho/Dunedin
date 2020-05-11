"use strict";
const debugEnabled = true;
const log = require("color-logs")(debugEnabled, debugEnabled, __filename);

const StreamArray = require('stream-json/streamers/StreamArray');
const fs = require('fs');
const path = require('path');
const jsonStream = StreamArray.withParser();


var gag = require("../features/gags/model");

console.info(gag);


let filename = path.join(__dirname, 'docs', 'twitter.js');
//let filename = path.join(__dirname, 'docs', 'twitter', 'tweet.js');

var parseTweet = (tw) => {
//	console.info("parsing ", tw);
	let content = tw.full_text;
	let author = "paulovelho";
	let rtRegex = /RT @[^\s]+: /;
	let match = rtRegex.exec(content);

	if(match) {
		let rt = match[0];
		content = content.substr(rt.length);
		author = rt.substr(4, rt.length-6);
	}

	let gag = {
		date: new Date(tw.created_at),
		origin: 'twitter',
		content: content,
		author: '@'+author,
		location: "http://twitter.com/"+author+"/status/"+tw.id,
	}
	console.info(gag);
}

jsonStream.on('data', ({key, value}) => {
	parseTweet(value);
});

jsonStream.on('end', () => {
	console.log('All done');
});

var s = fs.createReadStream(filename)
	.pipe(jsonStream.input);


