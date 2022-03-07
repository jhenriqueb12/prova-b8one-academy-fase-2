/* Sidebar */ 

let menu = true

const sidebar = document.querySelector(".main-sidebar")
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

/* Main Content */

/* --- Report Graphic --- */

const ctxOne = document.querySelector('.content-report__graphic--one').getContext('2d');
const myChartOne = new Chart(ctxOne, {
    type: 'line',
    data: {
        labels: ['06/10/21', '07/10/21', '08/10/21', '09/10/21', '10/10/21', '11/10/21', '12/10/21'],
        datasets: [{
            label: '# of Votes',
            data: [0, 50, 100, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }],
        datasets: [{
            label: '# of Votes',
            data: [0, 54, 80, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {

        
    }
});

const ctxTwo = document.querySelector('.content-report__graphic--two').getContext('2d');
const myChartTwo = new Chart(ctxTwo, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [0, 50, 100, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

        legend: {
            display: true,
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Relatório geral'
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxThree = document.querySelector('.content-report__graphic--three').getContext('2d');
const myChartThree = new Chart(ctxThree, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [0, 50, 100, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

        legend: {
            display: true,
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Relatório geral'
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

/* Revendedores */ 

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