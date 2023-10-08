import React from 'react'
import '../App.css'
import Card from './components/card'

function main() {
  return (
    <div className='main'>
      <div className='top'>
        <h1 className='money'>Money</h1>
      </div>


      <div className='parent'>
        <div className='cashbal-container'>
          <div style={{padding: "13px", display: "flex", justifyContent: "space-between"}}>
            <h3 className='cashbal-text'>Cash Balance</h3>
            <p className='cashbal-routing'>Account & Routing {">"}</p>
          </div>
          <h1 className='cashbal-balance'>$5,000.0</h1>
          <div className='buttons'>
            <button className='button'>Add Cash</button>
            <button className='button'>Add Cash</button>
          </div>
        </div>


        <div className='card-groups-container'>
          <div className='card-groups'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>

      <nav>
        <div class="footer">
          <p>Footer</p>
        </div>
      </nav>

    </div>
  )
}

export default main