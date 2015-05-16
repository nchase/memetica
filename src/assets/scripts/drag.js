function detectDrag(event)  {
  // initiate dragging UI if mousedown for 200ms:
  this.dragID = setTimeout(function() {
    startDragging(event.clientX);
  }, 200);
}

function killDrag(event) {
  // kill startDrag timer:

  clearTimeout(this.dragID);

  // (clever way to only have to take the next code path if we're really dragging)
}

function startDragging(mouseCoords) {
  document.querySelector('body').classList.add('b-dragging');
  document.querySelector('[data-contenteditable]').removeAttribute('contenteditable');

  document.body.addEventListener('touchmove', moveHandler);
  document.body.addEventListener('mousemove', moveHandler);
  document.body.addEventListener('touchend', dropHandler);
  document.body.addEventListener('mouseup', dropHandler);
}


function moveHandler(event) {
  var xCoordinate = event.clientX || event.pageX;
  document.querySelectorAll('.region--frame')[0].style.width = ((xCoordinate / window.innerWidth)  * 100 ) + '%';
  document.querySelectorAll('.region--frame')[1].style.width = (100 - (xCoordinate / window.innerWidth)  * 100 ) + '%';
}

function dropHandler(event) {
  document.body.removeEventListener('touchmove', moveHandler);
  document.body.removeEventListener('mousemove', moveHandler);
  document.querySelector('body').classList.remove('b-dragging');
  document.querySelector('[data-contenteditable]').setAttribute('contenteditable', true);
}

var handle = document.querySelector('.ctl--handle');
handle && handle.addEventListener('touchstart', detectDrag);
handle && handle.addEventListener('mousedown', detectDrag);
handle && handle.addEventListener('mouseup', killDrag);
