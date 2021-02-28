import React from 'react'
import DoughnutGraph from '../doughnutGraph'

export default function Graph({data}) {
  return <div className="graph-container">
    <DoughnutGraph data={data} />
  </div>
}
