import React, { useRef, useState, memo } from "react"
import Iframe from 'react-iframe'
import styles from "../styles/timetable.module.css"


function Timetable() {

  function fetchTimetable() {
    setLink(input.current.value)
  }
  const input = useRef("input")
  const [link, setLink] = useState("")

  return (
    <div className={styles.main}>
      <div className={styles.inputs}>
        <input type="text" ref={input}/>
        <button onClick={fetchTimetable}>Pobierz plan</button>
      </div>
      <Iframe url={link} width={window.innerWidth / 1.2} height={window.innerHeight / 1.2}/>
    </div>
  )
}

export default memo(Timetable)

