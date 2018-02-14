
/*
 * GET stretches page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('setup', {
  	data,
  	"title" : "Setup | Ergo"
  });
};