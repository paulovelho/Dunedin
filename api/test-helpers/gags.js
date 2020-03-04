"use strict";
var Chance = require('chance');
var chance = new Chance();

var request = require('supertest');
var server = require('../index').server;

exports.getRandom = () => {
	return {
		content: chance.sentence(),
		author: chance.name(),
		hash: chance.hash(),
		origin: chance.name(),
		created_at: chance.date(),
		used_in: null,
		active: true
	};
};
