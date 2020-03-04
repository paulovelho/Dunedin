"use strict";
var Chance = require('chance');
var chance = new Chance();

var request = require('supertest');
var server = require('../index').server;

exports.getRandomUser = (type) => {
	return {
		email: chance.email(),
		password: chance.hash(),
		active: true
	};
};
