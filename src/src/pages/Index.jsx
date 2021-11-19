import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'
import Header from '../components/Header'
import Card  from "../components/Card";

const list = ['Timetable', 'Calendar', 'Calculator', 'Notebook', 'Markbook'];

export default function Index () {
  return (
    <Layout>
      <div className={styles.main}>
      <Header value="Welcome to school4u! A place where you can manage your time efficiently!"/>
      <div className={styles.cardsContainer}>
        <Card pic={'../images/doc.png'} title="Check out our's app options" values={list}/>
      </div>
      </div>

    </Layout>
  )
}
