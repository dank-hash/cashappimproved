import React, { useEffect, useState } from 'react'
import '../App.css'
import Card from './components/card'
import { animated, useSpring } from '@react-spring/web'
import bitcoin from '../icons/bitcoin.png'
import savings from '../icons/savings.png'
import stocks from '../icons/stocks.png'
import taxes from '../icons/taxes.png'
import MoneySelector from './components/moneyselect'
import pfp from '../icons/finalpfp.png'

function Main() {
  const open = useSpring({
    from: { y: 500 },
    to: { y: 0 },
  })

  const close = useSpring({
    from: { y: 0 },
    to: { y: 500 },
  })

  let [addCashTrue, setaddCashTrue] = useState(false)
  let [addCash, setAddCash] = useState("")
  if(addCashTrue){
    addCash = "90%"
  }

  function addCashModal(){
    setaddCashTrue(!addCashTrue);
  }

  const [CashBalance, setCashBalance] = useState(0)
  const [CashBalanceCents, setCashBalanceCents] = useState(0)
  const [CashBalanceFooterText, setCashBalanceFooterText] = useState("$0")

  function displayCashAtBottom(){
    if(CashBalance < 1000){
        setCashBalanceFooterText("$" + CashBalance)
      } else if (CashBalance < 10000) {
        setCashBalanceFooterText("$" + CashBalance.toString().slice(0, -3) + "." + CashBalance.toString().slice(-3, 2) + "K")
    } else if(CashBalance < 100000){
      setCashBalanceFooterText("$" + CashBalance.toString().slice(0, -3) + "." + CashBalance.toString().slice(-3, 3) + "K")
    }
    else if(CashBalance < 1000000){
      setCashBalanceFooterText("$" + CashBalance.toString().slice(0, -3) + "." + CashBalance.toString().slice(-3, 4) + "K")
    }
  }

  useEffect(() => {
    displayCashAtBottom()
  }, [CashBalance])
  

  function addMoney(amount){
    setCashBalance(CashBalance + amount)
  }

  return (
    <div className='main'>
      <animated.div style={addCashTrue ? {...open} : {...close}} className='addcash-modal'>
        <div className='bar'>{/*"bar"*/}</div>
          <div className='inner-modal'>
            <p style={{fontWeight: "600", padding: "35px", color:"white"}}>Add Cash</p>
            <div className='moneyselectors-parent'>
              <MoneySelector onclick={() => addMoney(10)} text={"$10"}></MoneySelector>
              <MoneySelector onclick={() => addMoney(25)} text={"$25"}></MoneySelector>
              <MoneySelector onclick={() => addMoney(50)} text={"$50"}></MoneySelector>
              <MoneySelector onclick={() => addMoney(100)} text={"$100"}></MoneySelector>
              <MoneySelector onclick={() => addMoney(200)} text={"$200"}></MoneySelector>
              <MoneySelector text={"..."}></MoneySelector>
            </div>
          <button style={{fontWeight: "700", fontSize:"11pt"}} className='button-add'>Add</button>
        </div>
      </animated.div>
      <div className='top'>
        <img className='pfp' src={pfp}></img>
        <h1 className='money'>Money</h1>
      </div>

      <div className='parent'>
        <div className='cashbal-container'>
          <div style={{margin: "13px", display: "flex", justifyContent: "space-between"}}>
            <h3 className='cashbal-text'>Cash Balance</h3>
            <p className='cashbal-routing'>Account & Routing {">"}</p>
          </div>
          <h1 className='cashbal-balance'>${CashBalance.toLocaleString()}.{CashBalanceCents < 10 ? "0" + CashBalanceCents : CashBalanceCents}</h1>
          <div className='buttons'>
            <button onClick={addCashModal} className='button'>Add Cash</button>
            <button className='button'>Cash Out</button>
          </div>
        </div>


        <div className='card-groups-container'>
          <div className='card-groups'>
            <Card image={savings}></Card>
            <Card image={bitcoin}></Card>
            <Card image={stocks}></Card>
            <Card image={taxes}></Card>
          </div>
        </div>
      </div>

      <div className='more-section'>
        <p style={{textAlign: "left"}}>More ways to add money</p>
        <p style={{marginBottom:"7rem", textAlign: "center", fontSize: "9pt", color:"gray"}} className='footingtext'>Banking services provided by Cash App's bank<br/> partner{"(s)"}. Debit cards issued by Sutton Bank.<br/>Brokerage services by Cash App Investing<br/>LLC, member FINRA, subsidiary of Block Inc.<br/>Bitcoin services by Block, Inc. Tax filing<br/>services by Cash App Taxes, Inc. Disclosures</p>
      </div>

      <nav>
        <div class="footer">
          <p style={{fontWeight: "600"}}>
            {CashBalanceFooterText}
          </p>
        </div>
      </nav>
    
    </div>
  )
}

export default Main