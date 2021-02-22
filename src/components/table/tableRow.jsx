import React from 'react'
import { convertNumber } from '../../utils/convertNumber'

export default function TableRow({row, columns, index, onClick, key}) {  
  
    // for (const [key, value] of Object.entries(row)) {
    //  console.log(value, "key");
    //  console.log(key, "value")
    // }
  
    return <tr onClick={() => onClick(row.country)} >
      {
        columns.map((column) => {
          const result = Object.keys(row).find( item => item === column.props.source)

          if (column.props.index) return <td>{index + 1}</td>

          if (column.props.render) return <td>{column.props.render(row['countryInfo'].flag)}</td>
          
          if (column.props.number) {
            return <td>
            {convertNumber(row[result])}
          </td>
          } else {
            return <td>
            {row[result]}
          </td>
          }
          
        })
      }    
     </tr>
  }
  