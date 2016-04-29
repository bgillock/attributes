'use strict';

var url = require('url');


var SaveSettings = require('./SaveSettingsService');


module.exports.settingsPOST = function settingsPOST (req, res, next) {
  SaveSettings.settingsPOST(req.swagger.params, res, next);
};
