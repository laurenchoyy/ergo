
/*
 * Sign up new user
 */

var data = require('../data.json');

exports.login = function(req, res){

	var name = req.query["name"];
	var email = req.query["email"];
	var pwd = req.query["pwd"];
	var phone = req.query["phone"];

	var signupError;

	// Check for existing email
	for (i in data.users) {
		var currUser = data.users[i];

		if (email == currUser.email) {
				res.render('signup', {
			  	data,
			  	"title" : "Sign Up | Ergo",
			  	"hideTabs" : true,
			  	"hideLogin" : true,
			  	"signupError" : "Email address already belongs to an account."
		 	 });
			return;
		}
	}

	// If valid new account, push user
	var newUser = {
		"name" : name,
		"email" : email,
		"pwd" : pwd,
		"phone" : phone,
		"favorites" :[
		]
	};
	data.loggedIn = newUser;
	data.users.push(newUser);

	res.redirect('/');
};


