import React from 'react'
import DoughnutGraph from '../doughnutGraph'

export default function Graph({data}) {
  return <div className="box">
    <DoughnutGraph data={data} />
  </div>
}
