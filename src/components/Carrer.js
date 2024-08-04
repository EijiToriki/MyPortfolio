import React from 'react'
import '../css/carrer.css'
import { carrer_table, output_table } from '../data/carrerTableData'

const Carrer = () => {
  return (
    <div className='carrer-top' id='carrer'>
      <h1 className='carrer-title'>
        ■ Career
      </h1>
      <div className='carrer-content'>
        <h3 className='table-name'>
          〇 キャリア年表
        </h3>
        <table className='carrer-table'>
          <tr>
            <th className='carrer-age-th'>年齢</th>
            <th className='carrer-sentence-th'>経歴</th>
          </tr>
          {
            carrer_table.map((carrer, idx) => {
              return(
                <tr key={idx}>
                  <td className='carrer-age-td'>{carrer.age}</td>
                  <td className='carrer-sentence-td'>{carrer.sentence}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
      <div className='carrer-content'>
        <h3 className='table-name'>
          〇 成果
        </h3>
        <table className='carrer-table'>
          <tr>
            <th className='carrer-age-th'>年齢</th>
            <th className='carrer-sentence-th'>経歴</th>
          </tr>
          {
            output_table.map((output, idx) => {
              return(
                <tr key={idx}>
                  <td className='carrer-age-td'>{output.age}</td>
                  <td className='carrer-sentence-td'>
                    <a className='carrer-a' target="_blank" href={output.url} rel="noopener noreferrer">
                      {output.sentence}
                    </a>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>


    </div>
  )
}

export default Carrer