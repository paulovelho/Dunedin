"use strict";
const debugEnabled = true;
const log = require("color-logs")(debugEnabled, debugEnabled, __filename);

const fs = require('fs');
const es = require('event-stream');

let filename = path.join(__dirname, 'docs', 'clippings-2.txt');
//let filename = path.join(__dirname, 'docs', 'Kindle_201704.txt');

let content = null;

let clipping = null;

var newClipping = () => {
	content = "";
	clipping = {
		author: false,
		content: null,
		origin: 'kindle',
		location: false,
		date: false,
	};
}

var parseLine = (line) => {
	if(line == "==========") {
		clipping.content = content;
		clipping.hash = md5(clipping.author + content);
		console.info("clipping: ", clipping);
		console.info("******************* NEXT!");
		newClipping();
		return;
	}

	if(!line) return;
	if(!clipping.author) {
		clipping.author = line;
		return;
	}
	if(!clipping.location) {
		let location = line.split("| Added on ");
		clipping.date = new Date(location[1]);
		clipping.location = location[0];
		return;
	}
	content += line + "\n";
}

newClipping();
var s = fs.createReadStream(filename)
	.pipe(es.split())
	.pipe(es.mapSync(parseLine));


