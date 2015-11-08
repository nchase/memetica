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

  var cookieValue = window.location.search.match(/(.*?)=([^\&]*)&?/) &&
    window.location.search.match(/(.*?)=([^\&]*)&?/)[2];

  if (cookieValue) {
    cookieValue = 'src/assets/stylesheets/' + cookieValue;
  }

  if (!cookieValue) {
    cookieValue = document.cookie.match(/style=(.+);?/) &&
      document.cookie.match(/style=(.+);?/)[1];
  }

  if (!cookieValue) {
    cookieValue = 'src/assets/stylesheets/geo';
  }

  var evt = new Event('change');

  document.querySelector('.ctl--styleChanger').value = cookieValue;
  document.querySelector('.ctl--styleChanger').dispatchEvent(evt);
});
