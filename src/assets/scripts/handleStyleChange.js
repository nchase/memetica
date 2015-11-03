function handleStyleChange(event) {
  document.getElementById('style').setAttribute('href', event.target.value + '.css');
  document.cookie = "style=" + event.target.value;
}

document.querySelector('.ctl--styleChanger').addEventListener('change', handleStyleChange);

document.addEventListener('DOMContentLoaded', function() {
  var cookieValue = document.cookie.match(/style=(.+);?/) &&
    document.cookie.match(/style=(.+);?/)[1];

  if (!cookieValue) {
    cookieValue = 'src/assets/stylesheets/grid';
  }

  var evt = new Event('change');

  document.querySelector('.ctl--styleChanger').value = cookieValue;
  document.querySelector('.ctl--styleChanger').dispatchEvent(evt);
});
