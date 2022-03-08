const ctxOne = document.querySelector('.content-report__graphic--one')

const myChartOne = new Chart(ctxOne, {
  type: 'line',
  
  data: {
    labels: ['06/10', '06/10',  '06/10', '06/10', '06/10', '06/10'],
    
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