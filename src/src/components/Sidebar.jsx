import React from 'react';
import styles from '../styles/sidebar.module.css';
import { Link } from 'react-router-dom';

export default function Sidebar () {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src="" alt="" />
      </div>

      <ul className={styles.list}>
        <li><Link to="/"><i class="fas fa-graduation-cap"></i></Link></li>
        <li><Link to="/calculator"><i class="fas fa-calculator"></i></Link></li>
        <li><Link to="/notes"><i class="fas fa-sticky-note"></i></Link></li>
        <li><Link to="/timetable"><i class="fas fa-clipboard-list"></i></Link></li>
      </ul>

      <div>

      </div>
    </div>
  )
}
