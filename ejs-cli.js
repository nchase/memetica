#!/usr/bin/env node

// todo: add an option manager like node-optimist.

var ejs = require('ejs');
var fs = require('fs');
var execSync = require('child_process').execSync;

var contentPath = process.argv[2];

if (!contentPath) {
  console.error('error: no path provided.')
  process.exit(1);
}

var frame = contentPath;

var content = fs.readFileSync(contentPath).toString();

var singleColumn = content.match(/(\|\|\||<div class="col">)/) === null;

var layoutPath = './src/layout.html';

var layout = fs.readFileSync(layoutPath).toString();

var header = '';
var footer = '';

if (process.argv[3]) {
  header = fs.readFileSync(process.argv[3]).toString();
}

if (process.argv[4]) {
  footer = fs.readFileSync(process.argv[4]).toString();
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
    styles: [
      'robots',
      'wild',
      'brushup',
      'grid',
      'steel_moss',
      'bauhaus',
      'frontage',
      'helveticult'
    ]
  },
  frameContent: content,
  header: header,
  footer: footer,
  prefix: process.env.prefix || 'src/',
  requestStyle: '',
  bodyClass: `region--frame region--frame--${ frame.replace(/[^_a-zA-Z0-9-]+/g, '_')} ${singleColumn ? 'region--frame--singlet' : ''}`,
  published: true
}));
