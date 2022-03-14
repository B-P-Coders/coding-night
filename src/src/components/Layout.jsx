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
        <div>
          {/* Todo: zrobic karte do wybierania motywow*/}
        <ToggleSwitch/>
        </div>
        <FiSettings  className={styles.exit} onClick={() => setOpen(!open)}/>
      </section>
    </div>
  )
}
