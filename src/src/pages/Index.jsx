import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'
import Header from '../components/Header'
import Card  from "../components/Card";
import Pic from "../images/doc.png";


export default function Index () {
  return (
    <Layout>
      <div className={styles.main}>
      <Header value="Welcome to school4u! A place where you can manage your time efficiently!"/>
      <Card pic={Pic} value='This app contains numerous tools:' />
        <p>This app contains numerous tools:</p>
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
