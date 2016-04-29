'use strict';

exports.attributeGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "id" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.readLineGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * line (BigDecimal)
  * starXline (BigDecimal)
  * nTraces (BigDecimal)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "buff" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.settingsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "outputs" : [ "" ],
  "windowsize" : 1.3579000000000001069366817318950779736042022705078125,
  "customparameters" : "{}",
  "inputs" : [ {
    "name" : "aeiou",
    "id" : "aeiou"
  } ],
  "name" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.settingsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * settings (Settings)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

