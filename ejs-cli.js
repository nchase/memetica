#!/usr/bin/env node

// todo: add an option manager like node-optimist.

var ejs = require('ejs');
var fs = require('fs');
var execSync = require('child_process').execSync;
var data = require('./data.js');
var matchers = require('./matchers');

var executor = function(docPath, headPath, footPath) {
  var contentPath = docPath;

  if (!contentPath) {
    console.error('error: no path provided.')
    process.exit(1);
  }

  var frame = contentPath;

  var content = fs.readFileSync(contentPath).toString();

  var layoutPath = './src/layout.html';

  var layout = fs.readFileSync(layoutPath).toString();

  var header = '';
  var footer = '';

  if (headPath) {
    header = fs.readFileSync(headPath).toString();
  }

  if (footPath) {
    footer = fs.readFileSync(footPath).toString();
  }

  var titleMatch = matchers.getTitleFs(contentPath);
  var title = '';

  if (titleMatch) {
    title = titleMatch[1];
  }

  content = execSync(
    `
      cat ${contentPath} |
      node columnize.js |
      pandoc --from=markdown --to=html
    `
  ).toString();

  process.stdout.write(ejs.render(layout, {
    data: {
      styles: data.styles
    },
    frameContent: content,
    filename: 'src/src/',
    index: contentPath.match('index.md') ? true : undefined,
    header: header,
    footer: footer,
    title: title,
    prefix: process.env.prefix || 'src/',
    requestStyle: '',
    bodyClass: data.bodyClass({
      frame: frame,
      singleColumn: matchers.singleColumn(content)
    }),
    hasCode: matchers.hasCode(content),
    notrack: false,
    published: true
  }));
}

if (!module.parent) {
  executor(process.argv[2], process.argv[3], process.argv[4]);
}

module.exports = executor;
