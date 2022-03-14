import React from 'react'
import * as styles from '../styles/calculator.module.css'
import { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Calculator() {
    const [calc, setCalc] = useState('')
    const [result, setResult] = useState('')

    const ops = ['/', '*', '+', '-', '.']
    const updateCalc = (value) => {
        if (
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return
        }

        setCalc(calc + value)

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString())
        }
    }

    const createDigits = () => {
        const digits = []

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>
                    {i}
                </button>
            )
        }
        return digits
    }
    const calculate = () => {
        setCalc(eval(calc).toString())
    }

    const deleteLast = () => {
        if (calc == '') {
            return
        }

        const value = calc.slice(0, -1)

        setCalc(value)
    }

    return (
      <Layout>
        <Header value="Calculator just for you!"/>
        <main>
          <div className={styles.Bpp}>
              <div className={styles.calculator}>
                  <div className={styles.display}>
                      {result ? <span>({result})</span> : ''}&nbsp;
                      {calc || '0'}
                  </div>
                  <div className={styles.operators}>
                      <button onClick={() => updateCalc('/')}>/</button>
                      <button onClick={() => updateCalc('*')}>*</button>
                      <button onClick={() => updateCalc('+')}>+</button>
                      <button onClick={() => updateCalc('-')}>-</button>
                      <button onClick={deleteLast} classname={styles.del}>C</button>
                  </div>
                  <div className={styles.digits}>
                      {createDigits()}
                      <button onClick={() => updateCalc('0')}>0</button>
                      <button onClick={() => updateCalc('.')}>.</button>
                      <button onClick={calculate} classname={styles.sub}>=</button>
                  </div>
              </div>
            </div>
              <section className={styles.text}>

                <div className={styles.whole}>
                <div className={styles.quote}><q>Take calculated risks. That is quite different from being rash.</q> <br />
                George S. Patton</div>
                Usually a small electronic device that you often forget to bring to school, but no longer.
                Now you can freely explore math in just a few clicks accessing it from wherever you want.
                Perfect for quick calculations during doing homework.
                <div className={styles.try}>Try yourself!</div>
                </div>
              </section>
        </main>
      </Layout>
    )
}
