import {FaHome, FaCalendarAlt}  from "react-icons/fa";
import { MdOutlineDraw, MdSchool} from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from '../styles/links.module.css';

const links = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome/>
  },
  {
    title: 'Math',
    path: '/math',
    icon: <MdSchool/>
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: <CgNotes/>
  },
  {
    title: 'Timetable',
    path: '/timetable',
    icon: <FaCalendarAlt/>
  },
  {
    title: 'Drawing',
    path: '/draw',
    icon: <MdOutlineDraw/>
  }
]

export default function Links() {
  return(
    <>
    {links.map((ob, index) => {
      return (
        <li key={index} title={ob.title}>
          <Link to={ob.path}>{ob.icon}</Link>
        </li>
      )
      }
    )}
    <span className={styles.indicator}></span>
    </>
  )

}
