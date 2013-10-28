var foursquare = require('../lib/foursquare')();

exports.index = function(req, res) {
	res.render('index', { title: 'Venue tips' });
};
