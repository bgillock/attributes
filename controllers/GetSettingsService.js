'use strict';

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

