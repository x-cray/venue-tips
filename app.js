var express = require('express');
var index = require('./controllers/index');
var login = require('./controllers/login');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.cookieSession({ secret: 'Hoooray!!!', cookie: { maxAge: 60 * 60 * 1000 }}));
app.use(app.router);

var publicDir = path.join(__dirname, 'public');
app.use(require('less-middleware')({ src: publicDir }));
app.use(express.static(publicDir));

// Development only.
if (process.env.NODE_ENV || 'development' === 'development') {
	app.use(express.errorHandler());
}

app.get('/', index.index);
app.get('/login', login.login);
app.get('/callback', login.callback);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
