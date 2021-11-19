import React from 'react';
import styles from '../styles/sidebar.module.css';
import { Link } from 'react-router-dom';
import Graduation from '../images/graduation-cap-solid.svg'
import Calculator_solid from '../images/calculator-solid.svg'
import Sticky from '../images/sticky-note-solid.svg'
import Clipboard from '../images/clipboard-list-solid.svg'

export default function Sidebar () {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src="" alt="" />
      </div>

      <ul className={styles.list}>
<<<<<<< Updated upstream
        <li><Link to="/"><img src={Graduation} alt="Home" /></Link></li>
        <li><Link to="/calculator"><img src={Calculator-solid} alt="Calculator" /></Link></li>
        <li><Link to="/notes"><img src={Sticky} alt="Notes" /></Link></li>
        <li><Link to="/timetable"><img src={Clipboard} alt="Timetable" /></Link></li>
=======
        <li><Link to="/"><img src="../images/graduation-cap-solid.svg" /></Link></li>
        <li><Link to="/calculator"><img src="../images/calculator-solid.svg" /></Link></li>
        <li><Link to="/notes"><img src="../images/sticky-note-solid.svg" /></Link></li>
        <li><Link to="/timetable"><img src="../images/clipboard-list-solid.svg"/></Link></li>
>>>>>>> Stashed changes
      </ul>

      <div>

      </div>
    </div>
  )
}
