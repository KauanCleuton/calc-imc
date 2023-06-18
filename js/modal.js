export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose:document.querySelector('.modal button.close'),
  formSubmit: document.querySelector('form'),
  inputWeight: document.querySelector('#weight'),
  inputHeight:document.querySelector('#height'),
  input: document.querySelector('input'),
  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.toggle('open')
  }
}
Modal.buttonClose.addEventListener('click', function () {
  Modal.close()
})

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
      Modal.close()
    }
})