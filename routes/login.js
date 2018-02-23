
/*
 * GET login page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('login', {
  	data,
  	"title" : "Login | Ergo",
  	"hideTabs" : true,
  	"hideLogin" : true
  });
};

exports.fb = function(req, res){
	var userid = req.params.id;

	// Login user if they've already logged in
	for (i in data.users) {
		var currUser = data.users[i];
		if (currUser.id == userid) {
			console.log("existing user");
			data.loggedIn = currUser;
			res.redirect('/');
			return;
		}
	}

	// Otherwise, create new user
	console.log("creating new user");

	var newUser = {
		"id" : userid,
		"favorites" :[
		]
	};

	data.loggedIn = newUser;
	data.users.push(newUser);

 	res.redirect('/');
};