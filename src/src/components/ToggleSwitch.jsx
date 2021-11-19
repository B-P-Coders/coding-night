import React from 'react'
import styles from '../styles/toggle.module.css'

export default function ToggleSwitch () {
  return (
    <div>
      <link rel="stylesheet" href="/themes/default.css" />
      <label className={styles.switch}>
        <input type="checkbox" checked>
        <span className={styles.slider} className={styles.round}></span>
      </label>
    </div>
  )
}

