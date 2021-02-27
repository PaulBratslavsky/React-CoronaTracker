import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export default function DoughnutGraph({data}) {
  const { cases, recovered, deaths } = data;

  const config = {
    labels: ['Cases', 'Recovered',
             'Deaths'],
    datasets: [
      {
        backgroundColor: [
          '#393e46',
          '#ffd369',
          '#8a0832'
        ],
        data: [cases, recovered, deaths ]
      }
    ]
  }
  return (
    <div className="box">
      <Doughnut
        data={config}
        options={{
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  )
}


