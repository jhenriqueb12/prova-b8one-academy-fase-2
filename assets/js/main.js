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

  if(menu === false){
    menu = true
  }else {
    menu = false
  }
})


/* Main Content */

/* --- Graphic Sales --- */

const ctxSales = document.querySelector('.content-report__graphic--sales')

const myChartSales = new Chart(ctxSales, {
  type: 'line',
  
  data: {
    labels: ['06/10', '07/10', '07/10', '08/10', '09/10', '10/10', '11/10'],
    
    datasets: [{
      label: 'Estornado',
      data: [50, 100, 200, 70, 190, 300, 220],
      backgroundColor: '#425DC7',
      borderColor: '#425DC7',
      borderWidth: 2
    },
    
    {
      label: 'Cancelado',
      data: [30, 130, 230, 80, 280, 350, 110],
      backgroundColor: '#F03460',
      borderColor: '#F03460',
      borderWidth: 2
    },
    
    {
      label: 'Não Pago',
      data: [10, 110, 140, 90, 210, 400, 400],
      backgroundColor: '#FFBE00',
      borderColor: '#FFBE00',
      borderWidth: 2
    },

    {
      label: 'Pago',
      data: [70, 180, 10, 100, 290, 450, 250],
      backgroundColor: '#2EB042',
      borderColor: '#2EB042',
      borderWidth: 2,
    },
  ]
  },

  options: {

    responsive: true,

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

/* --- Graphic Requests --- */

const ctxRequests = document.querySelector('.content-report__graphic--resquests ')

const myChartRequests = new Chart(ctxRequests, {
  type: 'line',
  
  data: {
    labels: ['06/10', '07/10', '07/10', '08/10', '09/10', '10/10', '11/10'],
    
    datasets: [{
      label: 'Total de pedidos',
      data: [50, 100, 200, 70, 190, 300, 220],
      backgroundColor: '#425DC7',
      borderColor: '#425DC7',
      borderWidth: 2
    }]
  },

  options: {

    responsive: true,

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

/* --- Graphic Resallers --- */

const ctxResallers = document.querySelector('.content-report__graphic--resellers')

const myChartResallers = new Chart(ctxResallers, {
  type: 'line',
  
  data: {
    labels: ['06/10', '07/10', '07/10', '08/10', '09/10', '10/10', '11/10'],
    
    datasets: [{
      label: 'Valor total de vendas',
      data: [50, 100, 200, 70, 190, 300, 220],
      backgroundColor: '#425DC7',
      borderColor: '#425DC7',
      borderWidth: 2
    },
    

    {
      label: 'Quantidade de pedidos',
      data: [70, 180, 10, 90, 210, 320, 240],
      backgroundColor: '#2EB042',
      borderColor: '#2EB042',
      borderWidth: 2,
    },

    {
      label: 'Comissão a pagar',
      data: [30, 130, 230, 70, 190, 300, 220],
      backgroundColor: '#F03460',
      borderColor: '#F03460',
      borderWidth: 2
    },
  ]
  },

  options: {

    responsive: true,

    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

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