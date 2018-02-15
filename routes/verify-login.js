
/*
 * Register new user
 */

var data = require('../data.json');

exports.login = function(req, res){

	var email = req.query["email"];
	var pwd = req.query["pwd"];

	var loginError;

	// Check for email/pwd
	for (i in data.users) {
		var currUser = data.users[i];

		if (email == currUser.email) {
			if (pwd == currUser.pwd) {
				data.loggedIn = currUser;
				res.redirect('/');
				return;
			}
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

console.log("No account");
 res.render('login', {
  	data,
  	"title" : "Login | Ergo",
  	"hideTabs" : true,
  	"hideLogin" : true,
  	"loginError" : "Email address does not belong to an account."
  });
};