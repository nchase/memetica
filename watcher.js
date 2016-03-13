#!/usr/bin/env node

var chokidar = require('chokidar');
var spawn = require('child_process').spawn;

function runCommand(command, args) {
  command = command || 'npm';
  args = args || ['run', 'test'];

  process.stdout.write('\033c');
  spawn(command, args, {stdio: 'inherit'});
}

runCommand();

chokidar.watch('../', {
  ignored: /[\/\\]\./
}).on('change', runCommand.bind(null, null, null));
