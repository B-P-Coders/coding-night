import React from 'react';
import Sidebar from './Sidebar';
import styles from '../styles/layout.module.css';

export default function Layout ({children}) {
  console.log(styles)
  return (
    <div className={styles.container}>
      <link rel="stylesheet" href="./themes/default.css" />
      <Sidebar/>
      <div className={styles.site}>
        {children}
      </div>
    </div>
  )
}
