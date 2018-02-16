
/*
 * GET go page.
 */

var data = require('../data.json');

exports.view = function(req, res){
	data.activeEnvironment = false;

	// Clear todo queue
	data.todo = [];

	var selected = req.query;

	for (var i in selected) {
	
		if (selected[i] == 1) { 
		var stretch = data.stretches[i];
		data.todo.push(stretch);

		console.log(stretch.title, data.todo.length);
		}
	}

  res.render('go', {
  	data,
  	"title" : "Go! | Ergo"
  });
};