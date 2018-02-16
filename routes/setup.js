
/*
 * GET stretches page.
 */

var data = require('../data.json');

exports.view = function(req, res){

	var inputClass = req.query["name"];

	// Activate stretches for this environment

	for (var i in data.stretches) {
		var tags = data.stretches[i].tags;
		// Check all tags for a match
		for (var j in tags) {
			if (tags[j] == inputClass) {
				data.stretches[i].active = true;
			}
		}
	}

  res.render('setup', {
  	data,
  	"title" : "Setup | Ergo"
  });
};