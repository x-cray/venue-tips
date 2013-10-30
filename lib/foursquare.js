var env = process.env.NODE_ENV || 'development';

var config = {
	'secrets': env === 'production' ? {
		'clientId': '04LYSCJ1Z0HIQZ0YJUUVOY5BURVVZV3JQO2BTJAB254LGK04',
		'clientSecret': 'O5WJ44QVZIKOOP3MDR4KS314CSKC5XD1AFY5WHHP1TR5AVYC',
		'redirectUrl': 'http://venue-tips.herokuapp.com/callback'
	} : {
		'clientId': 'OB1S2ICFNUFOLCG5MYFKZTSLBYI40EQ32CQV34EL52FOCN2Y',
		'clientSecret': 'ATNWH4D5IGQUIQO1VIH2Z0Y0NKMQ5NBSB0TD3IFZVV34VUA4',
		'redirectUrl': 'http://localhost:5000/callback'
	}
};

module.exports = function() {
	return require('node-foursquare')(config);
};
