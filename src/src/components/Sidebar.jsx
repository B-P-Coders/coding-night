import React from 'react';
import styles from '../styles/sidebar.module.css';
import { Link } from 'react-router-dom';

export default function Sidebar () {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        fsjafn
      </div>
      <ul className={styles.list}>
        <li><Link to="/"> <img src="" alt="Home" /></Link></li>
        <li><Link to="/calculator"><img src="" alt="Calculator" /></Link></li>
        <li><Link to="/notes"><img src="" alt="Notes" /></Link></li>
        <li><Link to="/timetable"><img src="" alt="Timetable" /></Link></li>
      </ul>
    </div>
  )
}
