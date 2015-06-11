var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var counter = 0;

rl.on('line', function(line) {
  if (line.toString() === '|||' && counter === 1) {
    counter = 1;

    return process.stdout.write('</div>\n<div class="col">\n');
  }

  if (line.match(/^ /) === null && line.length > 0 && counter !== 0) {
    counter = 0;

    return process.stdout.write('</div>\n' + line + '\n');
  }

  if (line.toString() === '|||') {
    counter = 1;

    return process.stdout.write('<div class="col">\n');
  }

  if (line.match(/^\s.#/)) {
    return process.stdout.write(line.trim() + '\n');
  }

  return process.stdout.write(line + '\n');
});
