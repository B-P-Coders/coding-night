import React from 'react';
import styles from '../styles/sidebar.module.css';
import { Link } from 'react-router-dom';
import logo from "../images/icon.png"
import ToggleSwitch from './ToggleSwitch';

export default function Sidebar () {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img className={styles.logoimg} src={logo} alt="logo" />
      </div>

      <ul className={styles.list}>
        <li><Link to="/">🎓</Link></li>
        <li><Link to="/math">🧮</Link></li>
        <li><Link to="/notes">📒</Link></li>
        <li><Link to="/timetable">🗓️</Link></li>
        <li><ToggleSwitch/></li>
      </ul>

      <div>

      </div>
    </div>
  )
}
