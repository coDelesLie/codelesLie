/**
 * Created by user1016 on 2016/1/12.
 */
"use strict";
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let session = require('express-session');
let bodyParser = require('body-parser');
let multer = require('multer');
let errorHandler = require('errorhandler');
let routes = require('./routes/index');
let app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({ resave: true,
    saveUninitialized: true,
    secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(multer());
app.use(express.static(path.join(__dirname, 'assets')));
console.log(path.join(__dirname, 'assets'))
//app.use(express.static(path.join(__dirname, 'codelesLie')));
// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

app.get('', function (req,res) {
    routes.loginin(req,res);
});

app.use(function (req, res, next) {
    console.log('req ', req.url);
    return next()
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});