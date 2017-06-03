var fs = require('fs');
var path = require('path');

module.exports = function(app) {
	app.all('/' , function(req, res, next){ console.log('here');
		res.sendFile(path.join(__dirname, '../client', 'index.html'));
	})
}
