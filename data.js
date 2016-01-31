module.exports = {
  bodyClass: function(options) {
    return `region--frame region--frame--${ options.frame.replace(/[^_a-zA-Z0-9-]+/g, '_')} ${options.singleColumn ? 'region--frame--singlet' : ''}`;
  },
  frames: [
    'src/demo.md'
  ],
  styles: [
    'dinn',
    'geo',
    'robots',
    'wild',
    'brushup',
    'grid-violet-starling',
    'steel_moss',
    'bauhaus',
    'frontage',
    'helveticult'
  ]
};
