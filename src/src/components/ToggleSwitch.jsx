import React, { useRef, useState } from 'react'
import styles from '../styles/toggle.module.css';

const themes = [
  "light",
  "dark",
  "luna",
  "suna",
  "fairy",
  "falcon"
]

export default function ToggleSwitch ()
{

  const themeSelect = useRef()
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light')

  function ChangeTheme()
  {
    setTheme(themeSelect.current.value)
    localStorage.setItem("theme", themeSelect.current.value)
  }
  return (
    <div>
      <link rel="stylesheet" href={"./themes/" + theme + ".css"} />
      <div className={styles.container}>
      <label>
        <select onChange={ChangeTheme} ref={themeSelect} defaultValue={theme} className={styles.list}>
          {themes.map((element, index) => <option className={styles.opt} key={index}>{element}</option>)}
        </select>
      </label>
        </div>
    </div>
  )
}
