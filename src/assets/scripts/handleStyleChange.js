function handleStyleChange(event) {
  document.getElementById('style').setAttribute('href', event.target.value + '.css');
  document.cookie = "style=" + event.target.value;
}

document.querySelector('.ctl--styleChanger').addEventListener('change', handleStyleChange);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.ctl--styleChanger').value =
    document.cookie.match(/style=(.+);?/) && document.cookie.match(/style=(.+);?/)[1];
  document.querySelector('.ctl--styleChanger').dispatchEvent(new Event('change'));
});
