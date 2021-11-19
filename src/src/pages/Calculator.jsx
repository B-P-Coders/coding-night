import React from "react";
import * as styles from "../styles/calculator.module.css"
export default function Calculator(){
var currentNum = '';
var total = 0;
var operation = '';

return(

<div id="calculator">

    <div id="screen">
      <p>0</p>
    </div>
    <div id="buttonPad">
      <button id="ca">CA</button>
      <button id="7">7</button>
      <button id="4">4</button>
      <button id="1">1</button>
      <button id="0">0</button>
      <button id="ce">CE</button>
      <button id="8">8</button>
      <button id="5">5</button>
      <button id="2">2</button>
      <button id="decimal">.</button>
      <button id="percent">%</button>
      <button id="9">9</button>
      <button id="6">6</button>
      <button id="3">3</button>
      <button id="equals">=</button>
      <button id="divide">/</button>
      <button id="times">x</button>
      <button id="minus">-</button>
      <button id="plus">+</button>
      </div>
      </div>
)
}
