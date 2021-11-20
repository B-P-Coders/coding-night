import React, { useRef, useState, memo } from "react"
import Iframe from 'react-iframe'
import styles from "../styles/timetable.module.css"
import Layout from "../components/Layout"
import Header from "../components/Header"

function Timetable() {

  function fetchTimetable() {
    setLink(input.current.value)
    localStorage.setItem("timetable", input.current.value)
  }
  const input = useRef("input")
  const [link, setLink] = useState(input.current.value || "")

  return (
    <Layout>
    <div className={styles.main}>
      <Header value="Check out your lessons timetable!"/>
      <div className={styles.inputs}>
        <input type="text" ref={input}/>
        <button onClick={fetchTimetable}>Pobierz plan</button>
      </div>
      <Iframe url={link} width={window.innerWidth / 1.2} height={window.innerHeight / 1.5} className={styles.iframe}/>
    </div>
    </Layout>
  )
}

export default memo(Timetable)

