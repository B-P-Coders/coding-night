import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'

export default function Index () {
  return (
    <Layout>
      <div className={styles.main}>
        <p>Welcome to school4u. A place where you can manage your time efficiently!</p>
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
