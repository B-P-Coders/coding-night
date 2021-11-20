import React from 'react'
import * as styles from '../styles/bincalculator.module.css'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

export default function BinCalculator() {
  const [result, setResult] = useState()
    let [bin, setBinary] = useState()
    let [oct,setOct ] = useState()
    let [hex,setHex ] = useState()

    function handleSubmit(e) {
      e.preventDefault();
      console.log(result)
      binary()
      octal()
      hexa()
    }

    const binary = () => {
      bin = result;
      setBinary(bin.toString(2));
      console.log(bin)
    }
    const octal = () => {
      oct = result;
      setOct(oct.toString(8));
      console.log(oct)
    }
    const hexa = () => {
      hex=result;
      setHex(hex.toString(16));
      console.log(hex)
    }

    return (
      <Layout>
        <div className={styles.Bpp}>
          <Header value="Really useful Binary, Octal and Hexadecimal calculator"/>
            <div className={styles.calculator_decimal}>
              <div className={styles.inputs}>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Type in decimal" className={styles.input} value={result || '' } onChange={(e)=>setResult(parseInt(e.target.value))}/>
                <input type="submit" value="Count" className={styles.submit} />
                </form>

              </div>
              <div className={styles.results}>
                <p><h2>Binary:</h2>{bin}</p>
                <p><h2>Octal:</h2>{oct}</p>
                <p><h2>Hexadecimal:</h2>{hex}</p>
              </div>
            </div>
        </div>
      </Layout>
    )
}
