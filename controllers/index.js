var _ = require('underscore');
var foursquare = require('../lib/foursquare')();

exports.index = function(req, res) {
	if (req.session.accessToken) {
		var params = {
			sort: 'recent'
		};
		foursquare.Venues.getTips('4cfe839726c46a31a45d7758', params, req.session.accessToken, function(error, data) {
			if (error) {
				res.render('error', { error: error.message });
			} else {
				var tips = _.map(_.sortBy(data.tips.items, function(item) { return -item.createdAt; }), function(item) {
					return {
						date: new Date(item.createdAt * 1000).toDateString(),
						text: item.text,
						user: item.user.firstName + ' ' + item.user.lastName,
						avatar: item.user.photo.prefix + '64x64' + item.user.photo.suffix
					};
				});
				res.render('tips', {
					tips: tips
				});
			}
		});
	} else {
		res.render('index');
	}
};
