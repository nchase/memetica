function handleStyleChange(event) {
  document.getElementById('style').setAttribute('href', event.target.value + '.css');
  document.cookie = "style=" + event.target.value;
}

document.querySelector('.ctl--styleChanger').addEventListener('change', handleStyleChange);

