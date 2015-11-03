document.querySelector('.has-toggle').addEventListener('click', function(event){
  if (event.target === event.currentTarget) {
    event.preventDefault();
  }

  event.currentTarget.classList.add('is-active');
  document.querySelector('body').classList.add('is-active--modal');
});

document.querySelector('body').addEventListener('click', function(event) {
  if (event.currentTarget.classList.contains('is-active--modal')) {
    document.querySelector('.is-active').classList.remove('is-active');
    document.querySelector('.is-active--modal').classList.remove('is-active--modal');
  }
}, true);
