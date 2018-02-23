
/*
 * Register new user
 */

var data = require('../data.json');
var user = require('../public/user.json');

exports.login = function(req, res){

	var email = req.query["email"];
	var pwd = req.query["pwd"];

	var loginError;

	// Check for email/pwd
	for (i in data.users) {
		var currUser = data.users[i];

		// If email exists
		if (email == currUser.email) {
			// If email exists and pwd matches, log in
			if (pwd == currUser.pwd) {
				data.loggedIn = currUser;
				data.phone = currUser.phone;

				user["guest"] = false;

				res.redirect('/');
				return;
			}
			// Otherwise, return incorrect pwd error
			else {
				res.render('login', {
				  	data,
				  	"title" : "Login | Ergo",
				  	"hideTabs" : true,
				  	"hideLogin" : true,
				  	"loginError" : "Incorrect password."
				 });
				return;
			}		
		}
	}

	// If no account found for this email
	res.render('login', {
		data,
		user,
		"title" : "Login | Ergo",
		"loginError" : "Email address does not belong to an account."
	});
};