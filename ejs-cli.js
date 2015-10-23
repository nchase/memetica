#!/usr/bin/env node

var ejs = require('ejs');
var fs = require('fs');
var execSync = require('child_process').execSync;

var contentPath = process.argv[2];

var frame = contentPath;

var content = fs.readFileSync(contentPath).toString();

var singleColumn = content.match(/(\|\|\||<div class="col">)/) === null;

var layoutPath = process.argv[3] || './src/layout.html';

var layout = fs.readFileSync(layoutPath).toString();

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
      'steel_moss',
      'bauhaus',
      'frontage',
      'helveticult'
    ]
  },
  frameContent: content,
  prefix: process.env.prefix || 'src/',
  requestStyle: '',
  bodyClass: `region--frame region--frame--${ frame.replace(/[^_a-zA-Z0-9-]+/g, '_')} ${singleColumn ? 'region--frame--singlet' : ''}`,
  published: true
}));
