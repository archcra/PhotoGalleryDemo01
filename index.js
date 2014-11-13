
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var html = require('html');

var cors = require('cors');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/prologue')));
app.use(express.static(path.join(__dirname, 'public/part01')));
app.use(express.static(path.join(__dirname, 'public/intermission')));
app.use(express.static(path.join(__dirname, 'public/part02')));
app.use(express.static(path.join(__dirname, 'public/casting')));
app.use(express.static(path.join(__dirname, 'public/credits')));
app.use(express.static(path.join(__dirname, 'public/staff')));

app.use(cors()); //http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs


app.use(app.router);
//routes
routes(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
