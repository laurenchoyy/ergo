
/*
 * GET ready page.
 */

var data = require('../data.json');

exports.view = function(req, res){
 
  res.render('ready', {
  	data,
  	"title" : "Ready | Ergo"
  });
};