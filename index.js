/**
 * Created by user1016 on 2016/1/12.
 */
"use strict";
let express = require('express');
let routes = require('./routes');
let path = require('path');

let favicon = require('serve-favicon');
let session = require('express-session');
let bodyParser = require('body-parser');
let multer = require('multer');
let errorHandler = require('errorhandler');

let app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
    saveUninitialized: true,
    secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});