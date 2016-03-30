var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
app.use(cookieParser());
var sass = require('node-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');
var bodyParser = require('body-parser');
var serialize = require('./serialize');
var data = require('./data');
var matchers = require('./matchers');

app.use(bodyParser.text());

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', process.cwd() + '/src/');

app.locals.require = require;

app.get(/\/([^\s]+.(?:md|html))?$/, function(request, response) {
  if (!request.params[0]) {
    return serveIndex(request, response);
  }

  data.frames[0] = 'src/' + request.params[0].replace('html', 'md');

  if (!data.frames.length) data.frames = ['src/demo.md'];

  var frame = data.frames[0]

  var frameContent = require('./readFile')(data.frames[0]).toString();

  var titleMatch = matchers.getTitleFs(data.frames[0]);
  var title = '';

  if (titleMatch) {
    title = titleMatch[1];
  }

  response.render('layout', {
    bodyClass: data.bodyClass({
      frame: frame,
      singleColumn: matchers.singleColumn(frameContent)
    }),
    data: data,
    prefix: process.env.prefix || 'src/',
    header: '',
    footer: '',
    title: title,
    frame: frame,
    frameContent: frameContent,
    published: true,
    hasCode: matchers.hasCode(frameContent),
    notrack: true,
    requestStyle: request.query.style || request.cookies.style
  });
});

function serveIndex(request, response) {
  data.frames[0] = 'src/index.md'

  var frame = data.frames[0]

  var frameContent = require('./readFile')(data.frames[0]).toString();

  var header = require('./readFile')('src/header', {raw: true}).toString();
  var footer = require('./readFile')('src/footer', {raw: true}).toString();

  response.render('layout', {
    bodyClass: data.bodyClass({
      frame: frame,
      singleColumn: matchers.singleColumn(frameContent)
    }),
    index: true,
    data: data,
    prefix: process.env.prefix || 'src/',
    header: header,
    footer: footer,
    share: '',
    frameContent: frameContent,
    hasCode: false,
    published: true,
    notrack: true,
    requestStyle: request.query.style || request.cookies.style
  });
}

function getStylesheet(request, response) {
  var stylesheet = request.params.style || 'base';

  response.set('Content-Type', 'text/css');
  response.send(postcss([autoprefixer]).process(sass.renderSync({
    file: process.cwd() + '/src/assets/stylesheets/' + stylesheet + '.scss'
  }).css).css);
}

app.get('/stylesheets/:style.css', getStylesheet);
app.get('/src/assets/stylesheets/:style.css', getStylesheet);

app.put('/serialize', function(request, response) {
  console.log(serialize(request.body));
  response.sendStatus(200);
});

app.use(express.static(__dirname + '/src/assets'));
app.use('/src/assets', express.static(__dirname + '/src/assets'));

var invokeArgs = process.argv.slice(2).join(' ');

var listenPort = process.env.PORT ||
  invokeArgs.match(/(?:port=)([0-9]+)\s?/) &&
  invokeArgs.match(/(?:port=)([0-9]+)\s?/)[1] ||
  3000;

app.listen(listenPort);

console.log('http server listening on', listenPort);
