import React from 'react'
import styles from '../styles/card.module.css'
import picture from '../images/doc.png'


export default function Card(props) {
  console.log(props.pic)
  return (
    <div className={styles.main}>
      <link rel="stylesheet" href="/themes/default.css" />
      <div className={styles.pic}><img src={picture} alt="essa" /></div>
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}
