import React, { useRef, useState } from 'react'
import styles from '../styles/toggleFont.module.css';

const sizes = [
  "big",
  "medium",
  "small"
]
export default function ToggleFontSize () {
  return(
    <div>
      <input type="checkbox" id="btnControl" className={styles.btnControl}/>

    <label className={styles.btn} for="btnControl"><span className={styles.plus}>+</span></label>
    <button className={styles.minus}>-</button>
    </div>
  )
}
