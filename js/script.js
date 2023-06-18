import {Modal} from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notNumber } from './utils.js'



Modal.formSubmit.onsubmit = (event) => {
  event.preventDefault()
  
  const weight = Modal.inputWeight.value
  const height = Modal.inputHeight.value
  
  const showAlertError = notNumber(weight) || notNumber(height)
  if(showAlertError) {
    AlertError.open()
    return;
  }
  AlertError.close()

  Modal.open()
  const result = IMC(weight,height)

  Modal.message.innerText = `Seu IMC é ${result}`
  
}
// Modal.inputHeight.oninput = () => AlertError.close() 
// Modal.inputWeight.oninput = () => AlertError.close()
Modal.input.addEventListener('input', (event) => AlertError.close())