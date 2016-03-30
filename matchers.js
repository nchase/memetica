var fs = require('fs');

module.exports = {
  getTitle: function(input) {
    if (!hasMatchFn(input)) {
      return false;
    }

    return input.match(/# (\S+.*)\n/)
  },

  getTitleFs: function(input) {
    return this.getTitle(fs.readFileSync(input).toString());
  },

  hasCode: function(input) {
    if (!hasMatchFn(input)) {
      return false;
    }

    return input.match(/<pre class="/);
  },

  hasColumn: function(input) {
    if (!hasMatchFn(input)) {
      return false;
    }

    var columnMatch = input.match(/(\S*?\|\|\||<div class="col">)/);

    if (!columnMatch) {
      return false;
    }

    if (columnMatch[0].match(/(<code>|`)/)) {
      return false;
    }

    return columnMatch;
  },

  singleColumn: function(input) {
    return !this.hasColumn(input);
  }
};

function hasMatchFn(input) {
  if (!input) {
    return false;
  }

  if (!input.match) {
    return false;
  }

  return true;
}
