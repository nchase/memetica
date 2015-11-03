document.querySelector('.has-toggle').addEventListener('click', function(event){
  if (event.target === event.currentTarget) {
    event.preventDefault();
  }

  event.currentTarget.classList.add('is-active');
  document.querySelector('body').classList.add('is-active--modal');
});

function hasTouch(event, touchType) {
  touchType = touchType || 'touches';

  return !!(event && event[touchType]);
}

function handleBlur(event) {
  var activeEl = document.querySelector('.is-active');
  var activeElModal = document.querySelector('.is-active--modal');

  if (!activeEl) {
    return false;
  }

  if (
      (hasTouch(event) && !activeEl.contains(event.target)) ||
      (!hasTouch(event) && event.currentTarget.classList.contains('is-active--modal'))
  ) {
    activeEl.classList.remove('is-active');
    activeElModal.classList.remove('is-active--modal');
  }
}

document.querySelector('body').addEventListener('click', handleBlur, true);
document.querySelector('body').addEventListener('touchend', handleBlur, true);
