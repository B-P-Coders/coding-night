import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'
import Header from '../components/Header'
import Card  from "../components/Card";

export default function Index () {
  return (
    <Layout>
      <div className={styles.main}>
      <Header value="Welcome to school4u! A place where you can manage your time efficiently!"/>
      <div className={styles.cardsContainer}>
        <Card pic={'../images/doc.png'} title="Check out our's app options" />
      </div>

        <p>Check out our's app options</p>
        <ul>
            <li>Time table</li>
            <li>Calendar</li>
            <li>Calculator</li>
            <li>Notebook</li>
            <li>Mark diagram</li>
        </ul>
      </div>

    </Layout>
  )
}
