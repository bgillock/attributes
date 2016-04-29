'use strict';

var url = require('url');


var GetSettings = require('./GetSettingsService');


module.exports.settingsGET = function settingsGET (req, res, next) {
  GetSettings.settingsGET(req.swagger.params, res, next);
};
