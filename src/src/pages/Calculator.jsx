import React from "react";
import * as styles from "../styles/calculator.css" 
export default function Settings{
    $(document).ready(function() {

        var currentNum = '';
        var total = 0;
        var operation = '';
        console.log(typeof(total));
      
        function updateDisplay(disp) {
          console.log('Display updating: '+disp);
          $('p').text(disp);
        }
      
        function opPush(op) {
          console.log('Operand pushed');
          if (op === 'percent') {
            var currentNumInt = Number(currentNum);
            currentNumInt= currentNumInt / 100;
            currentNum = currentNumInt;
            updateDisplay(currentNumInt);
          } else {
            console.log('else run');
            if (op !== 'ce') {
              var currentNumInt = Number(currentNum);
              if (currentNumInt) {
                switch (operation) {
                  case '':
                    total = currentNumInt;
                    break;
                  case 'divide':
                    total = total / currentNumInt;
                    break;
                  case 'times':
                    total = total * currentNumInt;
                    break;
                  case 'minus':
                    total = total - currentNumInt;
                    break;
                  case 'plus':
                    total = total + currentNumInt;
                    break;
                  case 'equals':
                    break;
                }
              }
              if (op === 'ca') {
                console.log('CA');
                total = 0;
                op = '';
              }
              console.log('Total = '+total);
              operation = op;
            }
            updateDisplay(total);
            currentNum = '';
          }
        }
      
        function numPush(num) {
          console.log('Number pushed: '+num);
          currentNum += num;
          if (currentNum === '.') {
            currentNum = '0.';
          }
          updateDisplay(currentNum);
        }
      
        function buttonPush(btn) {
          console.log('btn = '+btn);
          if (btn === 'decimal') {
            numPush('.');
          } else if (isNaN(btn)) {
            opPush(btn);
          } else {
            numPush(btn);
          }
        }
      
        function updateTotal(op,num) {
        }
      
      
        $('button').click(function() {
          var btn = $(this).attr("id");
          console.log('Button pushed: '+btn);
          buttonPush(btn);
        });
      
        
      })
      

return(
    <div id="calculator">
  <div id="calcTop"></div>
  <div id="calcBody">
    <div id="branding">
      <h1>FreeCodeCamp</h1>
      <h3>CALCULATOR WIDGET</h3>
    </div>
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
  <div id="calcBottom"></div>
</div>
    
)
}