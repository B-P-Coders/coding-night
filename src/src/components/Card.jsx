import React from 'react'
import styles from '../styles/card.module.css'
import picture from '../images/doc.png'

export default function Card(props) {
  console.log(props.values)
    return (
        // <div className={styles.main}>
        //     <div className={styles.front}>
        //         <div className={styles.pic}>
        //             <img src={picture} alt="essa" />
        //         </div>
        //         <div className={styles.title}>{props.title}</div>
        //     </div>
        //     <div className={styles.back}>
        //       back side
        //     </div>
        //     <link rel="stylesheet" href="/themes/default.css" />
        // </div>

        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <div className={styles.imgcontainer}><img src={picture} alt="essa"/></div>
                    <h3>{props.title}</h3>
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
