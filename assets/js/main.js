/* Sidebar */ 

let menu = true

const headerUser = document.querySelector('.header-navbar__user')
const mainContent = document.querySelector('.main-content')
const sidebar = document.querySelector(".main-sidebar")
const hamburguerMenu = document.querySelector(".header-menu__hamburguer")
const hamburguerOne = document.querySelector(".header-menu__hamburguer--one")
const hamburguerTwo = document.querySelector(".header-menu__hamburguer--two")
const hamburguerThree = document.querySelector(".header-menu__hamburguer--three")

hamburguerMenu.addEventListener('click', () =>{

  headerUser.addEventListener('click', () => {
    if(menu === false){
      sidebar.classList.remove("active")
      hamburguerTwo.classList.remove("toggle")
      hamburguerOne.classList.remove("toggle")
      hamburguerThree.classList.remove("toggle")
      document.body.style.overflow = menu ? "hidden" : "initial"
    }
  })

  mainContent.addEventListener('click', () => {
    if(menu === false){
      sidebar.classList.remove("active")
      hamburguerTwo.classList.remove("toggle")
      hamburguerOne.classList.remove("toggle")
      hamburguerThree.classList.remove("toggle")
      document.body.style.overflow = menu ? "hidden" : "initial"
    }
  })

  document.body.style.overflow = menu ? "hidden" : "initial"

  sidebar.classList.toggle("active", menu)
  
  hamburguerTwo.classList.toggle("toggle", menu)
  hamburguerOne.classList.toggle("toggle", menu)
  hamburguerThree.classList.toggle("toggle", menu)

  if(menu === true){
    menu = false
  }else {
    menu = true
  }
})


/* Main Content */

/* --- Revendedores --- */ 

const all = document.querySelector('#content-report__graphic--box-one')
const biggestSale = document.querySelector('#content-report__graphic--box-two')
const lowestSale = document.querySelector('#content-report__graphic--box-three')
const text = document.querySelector('.content-report__graphic--categories-text')

all.addEventListener('click', () => {

    text.innerHTML = 'todos os revendedores'
})

biggestSale.addEventListener('click', () => {

    text.innerHTML = 'maiores vendas'
})

lowestSale.addEventListener('click', () => {

    text.innerHTML = 'menores vendas'
})