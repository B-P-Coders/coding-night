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
        <li><Link to="/">🎓</Link></li>
        <li><Link to="/calculator">🧮</Link></li>
        <li><Link to="/notes">📒</Link></li>
        <li><Link to="/timetable">🗓️</Link></li>
      </ul>

      <div>

      </div>
    </div>
  )
}
