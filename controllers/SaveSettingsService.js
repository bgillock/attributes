'use strict';
var debug = require('debug')('controllers');
exports.settingsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * settings (Settings)
  **/
  // no response value expected for this operation
  
  debug('id=' + args.id);
  debug('settings=' + JSON.stringify(args.settings));
  res.end();
}

