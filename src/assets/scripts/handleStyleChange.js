function handleStyleChange(event, options) {
  document.getElementById('style').setAttribute('href', event.target.value + '.css');

  if (!event.transient) {
    document.cookie = "style=" + event.target.value;
  }
}

document.querySelector('.ctl--styleChanger').addEventListener('change', handleStyleChange);

document.addEventListener('DOMContentLoaded', function() {
  var cookieValue = document.cookie.match(/style=(.+);?/) && document.cookie.match(/style=(.+);?/)[1];
  var options;
  var evt = new Event('change');
  evt.transient = false;

  if (!cookieValue) {
    evt.transient = true;
    options = document.querySelectorAll('.ctl--styleChanger option');
    cookieValue = options[Math.floor(Math.random() * (options.length + 1))].value

    document.querySelector('.ctl--styleChanger').value = cookieValue;
    return document.querySelector('.ctl--styleChanger').dispatchEvent(evt);
  }

  document.querySelector('.ctl--styleChanger').value = cookieValue;
  document.querySelector('.ctl--styleChanger').dispatchEvent(evt);
});
