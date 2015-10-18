function serializeDocument(document) {
  var request = new XMLHttpRequest();

  request.open('PUT', 'serialize', true);
  request.send(document);
  window.document.body.classList.add('is-serializing');
  request.onload = function(a,b,c) {
    window.document.body.classList.remove('is-serializing');
  };
}

function handleSerialize(event) {
  var modKey = (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)

  if (event.type === 'click' || event.type === 'keydown' && modKey && event.keyCode === 83) {
    event.preventDefault();
    serializeDocument(document.body.querySelector('.region--frame-inner').innerHTML);
  }
}

document.body.addEventListener('keydown', handleSerialize);

document.querySelector('.ctl--serialize') &&
document.querySelector('.ctl--serialize').addEventListener('click', handleSerialize);

require(`${prefix}assets/scripts/medium-editor.js`);

var editor = new MediumEditor('[contenteditable]', {
  buttons: [
    'bold',
    'italic',
    'underline',
    'anchor',
    'quote',
    'header1',
    'header2'
  ],
  firstHeader: 'h1',
  secondHeader: 'h2'
});
