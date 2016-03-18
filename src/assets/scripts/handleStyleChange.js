function handleStyleChange(event) {
  document.getElementById('style').setAttribute('href', event.target.value + '.css');
  document.cookie = "style=" + event.target.value;
}

document.querySelector('.ctl--styleChanger').addEventListener('change', handleStyleChange);

document.addEventListener('DOMContentLoaded', function() {
  if (!document.getElementById('style')) {
    var styleRelTag = document.createElement('link');
    styleRelTag.setAttribute('rel', 'stylesheet');
    styleRelTag.setAttribute('id', 'style');
    document.getElementsByTagName('head')[0].appendChild(styleRelTag);
  }

  var cookieValue = window.location.search.match(/(.style?)=([^\&]*)&?/) &&
    window.location.search.match(/(.style?)=([^\&]*)&?/)[2];

  if (cookieValue) {
    cookieValue = 'src/assets/stylesheets/' + cookieValue;
  }

  if (!cookieValue) {
    cookieValue = document.cookie.match(/style=(.[^;]+);?/) &&
      document.cookie.match(/style=(.[^;]+);?/)[1];
  }

  if (!cookieValue) {
    cookieValue = 'src/assets/stylesheets/fork';
  }

  var evt = new Event('change');

  document.querySelector('.ctl--styleChanger').value = cookieValue;
  document.querySelector('.ctl--styleChanger').dispatchEvent(evt);
});

document.querySelector('.ctl--styleToggle').addEventListener('click', function(event) {
  if (event.target.getAttribute('data-toggled')) {
    Array.prototype.forEach.call(document.querySelectorAll('[rel=stylesheet-off]'), function(element, index) {
      element.setAttribute('rel', 'stylesheet');
    });

    return event.target.removeAttribute('data-toggled');
  }

  Array.prototype.forEach.call(document.querySelectorAll('[rel=stylesheet]'), function(element, index) {
    element.setAttribute('rel', 'stylesheet-off');
  });

  event.target.setAttribute('data-toggled', true);
});
