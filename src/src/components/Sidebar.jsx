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
        <li><Link to="/"><img src="../images/graduation-cap-solid.svg" alt="Home" /></Link></li>
        <li><Link to="/calculator"><img src="../images/calculator-solid.svg" alt="Calculator" /></Link></li>
        <li><Link to="/notes"><img src="../images/sticky-note-solid.svg" alt="Notes" /></Link></li>
        <li><Link to="/timetable"><img src="../images/clipboard-list-solid.svg" alt="Timetable" /></Link></li>
      </ul>

      <div>

      </div>
    </div>
  )
}
