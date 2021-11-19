import React from 'react';
import styles from '../styles/sidebar.module.css';
import { Link } from 'react-router-dom';

export default function Sidebar () {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        fsjafn
      </div>
      <link rel="stylesheet" href="/themes/default.css" />
      <ul className={styles.list}>
        <li><Link to="/"><i class="fas fa-calculator" alt="Home" /></Link></li>
        <li><Link to="/calculator"><img src="" alt="Calculator" /></Link></li>
        <li><Link to="/notes"><img src="" alt="Notes" /></Link></li>
        <li><Link to="/timetable"><img src="" alt="Timetable" /></Link></li>
      </ul>

      <div>

      </div>
    </div>
  )
}
