
/*
 * GET signup page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('signup', {
  	data,
  	"title" : "Sign Up | Ergo",
  	"hideTabs" : true,
  	"hideLogin" : true
  });
};