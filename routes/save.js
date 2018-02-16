
/*
 * GET save favorites page.
 */

var data = require('../data.json');

exports.save = function(req, res){

	var favorite = {
		"name" : req.query["name"],
		"url" : req.query["url"]
	}
	
    data.loggedIn.favorites.push(favorite); 
};