const buttonSubmit = document.querySelector('.login__button')
const inputEmail = document.querySelector('.login__field--input-email')
const emailError = document.querySelector('.login__email--error')
const inputPassword = document.querySelector('.login__field--input-password')
const passwordError = document.querySelector('.login__password--error')
const eyePassword = document.querySelector('.login__field--eye')

inputEmail.addEventListener('blur', () => {
  if(inputEmail.validity.typeMismatch === true){
    emailError.innerHTML = "Este e-mail não existe, você tem outro?"
    inputEmail.classList.add('login__active--error')
  }else {
    emailError.innerHTML = ""
    inputEmail.classList.remove('login__active--error')

  }
})

eyePassword.addEventListener('click', () => {
  if(inputPassword.type === 'password'){
    inputPassword.type = 'text'
  }else{
    inputPassword.type = 'password'
  }
})

buttonSubmit.addEventListener('click', () => {
  window.location.href = "../../index.html"
})