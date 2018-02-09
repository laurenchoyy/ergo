
/*
 * GET start page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('start', data);
};