import React from 'react';
import Sidebar from './Sidebar';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.site}>
        {children}
      </div>
    </div>
  )
}
