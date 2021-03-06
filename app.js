
// Twit-wit Module Dependencies
var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path'),
  fs = require('fs');

// Create our express app  
var app = express();

// All environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// FOR DEVELOPMENT USE ONLY
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Setup our routes 
app.get('/', routes.index);
app.get('/ping', routes.ping);

// Create the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});