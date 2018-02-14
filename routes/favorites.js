
/*
 * GET favorites page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('favorites', {
  	data,
  	"title" : "Favorites | Ergo"
  });
};