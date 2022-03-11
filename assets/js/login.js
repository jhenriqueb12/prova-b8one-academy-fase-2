const form = document.querySelector('.login__field--form')

const inputEmail = document.querySelector('.login__field--input-email')
const emailError = document.querySelector('.login__email--error')

const inputPassword = document.querySelector('.login__field--input-password')
const passwordError = document.querySelector('.login__password--error')

const buttonSubmit = document.querySelector('.login__button')



form.addEventListener('submit', (event) => {
    
  let userList = [{
    email: 'academy@b8one.com',
    password: 'Academy2022'
  }]
  
  for(i = 0; i < userList.length; i++){
    if(inputEmail.value === userList[i].email && inputPassword.value === userList[i].password){
      window.location.href = "assets/dashboard.html"
    }else if(inputEmail.value !== userList[i].email){
      emailError.innerHTML = "Este e-mail não existe, você tem outro?"
      inputEmail.classList.add('login__active--error')
    }else if(inputPassword.value !== userList[i].password){
      passwordError.innerHTML = "Esta senha não existe, você tem outra?"
      inputPassword.classList.add('login__active--error')
    }
  }
  
  event.preventDefault()

})


const eyePassword = document.querySelector('.login__field--eye')

eyePassword.addEventListener('click', () => {
  if(inputPassword.type === 'password'){
    inputPassword.type = 'text'
  }else{
    inputPassword.type = 'password'
  }
})
