var config = {
	'secrets': {
		'clientId': '04LYSCJ1Z0HIQZ0YJUUVOY5BURVVZV3JQO2BTJAB254LGK04',
		'clientSecret': 'O5WJ44QVZIKOOP3MDR4KS314CSKC5XD1AFY5WHHP1TR5AVYC',
		'redirectUrl': 'http://venue-tips.herokuapp.com/callback'
	}
};

module.exports = function() {
	return require('node-foursquare')(config);
};
