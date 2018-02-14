
/*
 * GET go page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('go', {
  	data,
  	"title" : "Go | Ergo"
  });
};