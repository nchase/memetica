function handleStyleChange(event) {
  document.getElementById('style').setAttribute('href', event.target.value + '.css');
}

document.querySelector('.ctl--styleChanger').addEventListener('change', handleStyleChange);

