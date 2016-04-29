'use strict';

var url = require('url');


var Attributes = require('./AttributesService');


module.exports.attributeGET = function attributeGET (req, res, next) {
  Attributes.attributeGET(req.swagger.params, res, next);
};
