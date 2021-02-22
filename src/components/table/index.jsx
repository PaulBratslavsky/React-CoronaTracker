import React from 'react'
import TableRow from './tableRow'
import './style.css'

export default function Table({children, sourceData, onClick}) {
  
  const columns = React.Children.toArray(children)
  const [data, setData ] = React.useState([])
  
  React.useEffect(() => {
    if (sourceData) setData(sourceData)
  }, [sourceData]);
  
  return <div className="table">
    <table>
    <thead>
      <tr>
        { columns.map( column => <th>{column.props.label}</th>)}
     </tr>
    </thead>
    
    <tbody>
      { data.map( (row, index) => <TableRow key={row.id} row={row} columns={columns} index={index} onClick={onClick}/> )}
    </tbody>
  </table></div>
}
