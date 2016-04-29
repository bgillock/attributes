'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.attributeGET = function attributeGET (req, res, next) {
  Default.attributeGET(req.swagger.params, res, next);
};

module.exports.readLineGET = function readLineGET (req, res, next) {
  Default.readLineGET(req.swagger.params, res, next);
};

module.exports.settingsGET = function settingsGET (req, res, next) {
  Default.settingsGET(req.swagger.params, res, next);
};

module.exports.settingsPOST = function settingsPOST (req, res, next) {
  Default.settingsPOST(req.swagger.params, res, next);
};
