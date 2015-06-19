// this can be used like:
// ` cat src/demo.md.html
//   | pandoc --from=html --to=markdown --atx-headers
//   | node decolumnize.js
//   > src/demo.md
// `
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var counter = 0;

rl.on('line', function(line) {
  if (line.match('class="col"') !== null) {
    counter = 1;

    return process.stdout.write('|||\n');
  }

  if (line.match('</div>') !== null && counter === 1) {
    counter = 0;

    return process.stdout.write('\n');
  }

  if (counter === 1) {
    return process.stdout.write('  ' + line + '\n');
  }

  return process.stdout.write(line + '\n');
});
