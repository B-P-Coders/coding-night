import React from 'react';
import Sidebar from './Sidebar';
import styles from '../styles/layout.module.css';
import TitleBar from './TitleBar';

export default function Layout({ children }) {
  console.log(styles)
  return (
    <>
      <TitleBar />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.site}>
          {children}
        </div>
      </div>
    </>
  )
}
