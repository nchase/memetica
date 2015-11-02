function handleStyleChange(event, options) {
  document.getElementById('style').setAttribute('href', event.target.value + '.css');

  if (!event.transient) {
    document.cookie = "style=" + event.target.value;
  }
}

document.querySelector('.ctl--styleChanger').addEventListener('change', handleStyleChange);

document.addEventListener('DOMContentLoaded', function() {
  var cookieValue = window.location.search.match(/(.*?)=([^\&]*)&?/) &&
    window.location.search.match(/(.*?)=([^\&]*)&?/)[2];

  if (cookieValue) {
    cookieValue = 'src/assets/stylesheets/' + cookieValue;
  }

  var evt = new Event('change');
  evt.transient = false;
  var options;

  if (!cookieValue) {
    cookieValue = document.cookie.match(/style=(.+);?/) &&
      document.cookie.match(/style=(.+);?/)[1];
  }

  if (!cookieValue) {
    evt.transient = true;
    options = document.querySelectorAll('.ctl--styleChanger option');
    cookieValue = options[Math.floor(Math.random() * options.length)].value

    document.querySelector('.ctl--styleChanger').value = cookieValue;
    return document.querySelector('.ctl--styleChanger').dispatchEvent(evt);
  }

  document.querySelector('.ctl--styleChanger').value = cookieValue;
  document.querySelector('.ctl--styleChanger').dispatchEvent(evt);
});
