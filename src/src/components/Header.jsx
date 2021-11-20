import React from 'react'
import styles from '../styles/header.module.css'

export default function Header(props) {
  return (
    <div className={styles.main}>
      <h1>{props.value}</h1>
    </div>
  )
}
