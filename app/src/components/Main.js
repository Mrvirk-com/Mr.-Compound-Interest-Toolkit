import React, { Component } from 'react'
import CompoundingCalculator from './CompoundingCalculator'

export class Main extends Component {
    render() {
        return (
            <div className="main">
      <h1>Welcome to <span>Compound Interest</span> Calculator</h1>
      <b>Percentage Calculator helps calculate percentages with ease</b>
      <div style={{overflow:"auto"}}>
       <CompoundingCalculator/>
      </div>
      <div style={{padding:"15px;text-align:center;"}}>
      

      </div>
      <div class="boxes">
        <p><b>What is Percentage ?</b></p>
        <p>A Percentage is a number or ratio expressed as a fraction of 100. It is often denoted using the percent sign, "%"
        </p>
        

      </div>

      <script src="logic.js"></script>
      


    </div>
        )
    }
}

export default Main
