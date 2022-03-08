const sevenDays = document.querySelector('#content-report__buttons--input-one')
const fifteenDays = document.querySelector('#content-report__buttons--input-two')
const lastMonth = document.querySelector('#content-report__buttons--input-three')
const lastYear = document.querySelector('#content-report__buttons--input-four')

fifteenDays.addEventListener('click', () => {
  fifteenDays.checked = true
})

function customDate() {

  if(sevenDays.checked === true){
    let date = ['06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10']

    return date
  }else if(fifteenDays.checked === true){
    let date = ['06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10', '06/10']

    return date
  }
  
  
}

console.log(sevenDays.checked);

// Graphic Sales

const ctxSales = document.querySelector('.content-report__graphic--sales')

const myChartSales = new Chart(ctxSales, {
  type: 'line',
  
  data: {
    labels: customDate(),
    
    datasets: [{
      label: 'Estornado',
      data: [50, 100, 200],
      backgroundColor: '#425DC7',
      borderColor: '#425DC7',
      borderWidth: 2
    },
    
    {
      label: 'Cancelado',
      data: [30, 130, 230],
      backgroundColor: '#F03460',
      borderColor: '#F03460',
      borderWidth: 2
    },
    
    {
      label: 'Não Pago',
      data: [10, 110, 140],
      backgroundColor: '#FFBE00',
      borderColor: '#FFBE00',
      borderWidth: 2
    },

    {
      label: 'Pago',
      data: [70, 180, 10],
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

// Graphic Requests

const ctxRequests = document.querySelector('.content-report__graphic--resquests ')

const myChartRequests = new Chart(ctxRequests, {
  type: 'line',
  
  data: {
    labels: ['06/10', '06/10',  '06/10', '06/10', '06/10', '06/10'],
    
    datasets: [{
      label: 'Total de pedidos',
      data: [50, 100, 200],
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

// Graphic Resallers

const ctxResallers = document.querySelector('.content-report__graphic--resellers')

const myChartResallers = new Chart(ctxResallers, {
  type: 'line',
  
  data: {
    labels: ['06/10', '06/10',  '06/10', '06/10', '06/10', '06/10'],
    
    datasets: [{
      label: 'Valor total de vendas',
      data: [50, 100, 200],
      backgroundColor: '#425DC7',
      borderColor: '#425DC7',
      borderWidth: 2
    },
    

    {
      label: 'Quantidade de pedidos',
      data: [70, 180, 10],
      backgroundColor: '#2EB042',
      borderColor: '#2EB042',
      borderWidth: 2,
    },

    {
      label: 'Comissão a pagar',
      data: [30, 130, 230],
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