var foursquare = require('../lib/foursquare')();

exports.login = function(req, res) {
	res.writeHead(303, { 'location': foursquare.getAuthClientRedirectUrl() });
	res.end();
};

exports.callback = function(req, res) {
	foursquare.getAccessToken({
		code: req.query.code
	}, function(error, accessToken) {
		if (error) {
			res.send('An error was thrown: ' + error.message);
		}
		else {
			req.session.accessToken = accessToken;
		}
	});
};
