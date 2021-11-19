import React from 'react'
import styles from '../styles/card.module.css'

export default function Card(props) {
  console.log(props.values)
    return (
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <div className={styles.imgcontainer}> <img src={props.pic} alt="essa"/> </div>
                    <p>{props.title}</p>
                    <span>{props.desc}</span>
                </div>
                <div className={styles.flipCardBack}>
                    {props.values.map((value) => {
                      return (
                        <p>{value}</p>
                      )
                    })}
                </div>
            </div>
        </div>
    )
}
