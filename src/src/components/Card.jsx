import React from 'react'
import styles from '../styles/card.module.css'

export default function Card(props) {
    return (
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <div className={styles.imgcontainer}>
                      <img src={props.pic} alt="essa" className={styles.imgs}/>
                    </div>
                    <p>{props.title}</p>
                    <span>{props.desc}</span>
                </div>
                <div className={styles.flipCardBack}>
                    {props.values.map((value, index) => {
                      return (
                        <p key={index}>{value}</p>
                      )
                    })}
                </div>
            </div>
        </div>
    )
}
