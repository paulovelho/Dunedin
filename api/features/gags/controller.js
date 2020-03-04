"use strict";
var debugEnabled = require("../../config").debug;
var log = require("color-logs")(debugEnabled, debugEnabled, __filename);

var Gag = require('./model');
var BaseApi = require("../../api");

var mocks = require('../../test-helpers/_mocks');

class GagsController extends BaseApi {

  getGag(req, res) {
    let id = req.params.id;
    Gag.findById(id)
      .then(model => this.success(res, model))
      .catch(err => this.exception(res, err));
  }

  getGags(req, res) {
    Gag.find()
      .limit(50)
      .then(model => this.success(res, model))
      .catch(err => this.exception(res, err));
  }

  searchGags(req, res) {
    var query = req.query.q;
    Gag.find({ "content": { "$regex": query, "$options": "i" } })
      .then(model => this.success(res, model))
      .catch(err => this.exception(res, err));
  }

  searchAuthors(req, res) {
    var query = req.query.q;
    Gag.find({ "author": { "$regex": query, "$options": "i" } })
      .then(model => this.success(res, model))
      .catch(err => this.exception(res, err));
  }

  createGag(req, res) {
    console.info("create gag");
    var model = new Gag(req.body);
    console.info("model: ", model);
    model.active = true;
    return new Promise((resolve, reject) => {
      model.save((err, model) => {
        if (err) {
          log.error("save Gag error", err);
          this.exception(res, err);
          return reject(err);
        }
        this.success(res, model);
        return resolve(model);
      });
    });
  }

  updateGag(req, res) {
    var id = req.params.id;

    Gag.update({ _id: id }, req.body)
      .then((model) => {
        this.getGagById(id)
          .then(model => this.success(res, model))
          .catch(err => this.exception(res, err));
      })
      .catch(err => this.exception(res, err));
  }

  async deleteGag(req, res) {
    var id = req.params.id;
    try {
      let gag = await Gag.findById(id)
      await gag.remove();
      return this.success(res, gag);
    } catch(ex) {
      return this.exception(res, ex);
    }
  }

}

module.exports = new GagsController();
