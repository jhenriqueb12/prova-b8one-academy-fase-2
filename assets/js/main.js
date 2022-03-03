/* Sidebar */ 

let menu = true

const sidebar = document.querySelector(".sidebar")
const hamburguerMenu = document.querySelector(".header-menu__hamburguer")
const hamburguerOne = document.querySelector(".header-menu__hamburguer--one")
const hamburguerTwo = document.querySelector(".header-menu__hamburguer--two")
const hamburguerThree = document.querySelector(".header-menu__hamburguer--three")

hamburguerMenu.addEventListener('click', () =>{

  sidebar.classList.toggle("active", menu)
  hamburguerTwo.classList.toggle("toggle", menu)
  hamburguerOne.classList.toggle("toggle", menu)
  hamburguerThree.classList.toggle("toggle", menu)

  menu = !menu
})