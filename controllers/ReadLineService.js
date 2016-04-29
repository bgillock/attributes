'use strict';

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

