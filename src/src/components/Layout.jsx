import {FiSettings}  from "react-icons/fi";
import React, {useState} from 'react';
import Sidebar from './Sidebar';
import ToggleSwitch from './ToggleSwitch';
import styles from '../styles/layout.module.css';
export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.site}>
        {children}
      </div>
      <FiSettings className={styles.open} onClick={() => setOpen(!open)}/>
      <section className={open ? styles.active : styles.closed}>
        <div className={styles.back}>
          <div className={styles.element}>Settings</div>
          <hr className={styles.line}/>
          <div className={styles.element}>Theme
          <span className={styles.themes}><ToggleSwitch/></span></div>
          <hr className={styles.line}/>

        </div>
        <FiSettings  className={styles.exit} onClick={() => setOpen(!open)}/>
      </section>
    </div>
  )
}
