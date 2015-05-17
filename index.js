require('babel/register');

var express = require('express');
var app = express();
var sass = require('node-sass');
var autoprefixer = require('autoprefixer-core');

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', process.cwd() + '/src/');

app.locals.require = require;

app.get(/\/([^\s]+.(?:md|html))?$/, function(request, response) {
  var data = JSON.parse(JSON.stringify(require('./data')));

  if (request.params[0]) {
    data.frames[0] = 'src/' + request.params[0].replace('html', 'md');
  }

  response.render('index', {
    data: data,
    published: request.query.published,
    requestStyle: request.query.style
  });
});

app.get('/base.css', function(request, response) {
  response.set('Content-Type', 'text/css');
  response.send(autoprefixer.process(sass.renderSync({
    file: process.cwd() + '/src/assets/stylesheets/base.scss'
  }).css).css);
});

app.get('/:style.css', function(request, response) {
  response.set('Content-Type', 'text/css');
  response.send(autoprefixer.process(sass.renderSync({
    file: process.cwd() + '/src/assets/stylesheets/' + request.params.style + '.scss'
  }).css).css);
});

app.use(express.static(__dirname + '/src/assets'));

var invokeArgs = process.argv.slice(2).join(' ');

var listenPort = process.env.PORT ||
  invokeArgs.match(/(?:port=)([0-9]+)\s?/) &&
  invokeArgs.match(/(?:port=)([0-9]+)\s?/)[1] ||
  3000;

app.listen(listenPort);

console.log('http server listening on', listenPort);
