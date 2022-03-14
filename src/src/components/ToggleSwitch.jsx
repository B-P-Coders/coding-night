import React, { useRef, useState } from 'react'
import styles from '../styles/toggle.module.css'

const themes = [
  "true",
  "false",
  "luna",
  "suna",
  "fairy",
  "falcon"
]

export default function ToggleSwitch ()
{

  const themeSelect = useRef()
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'true')

  function ChangeTheme()
  {
    setTheme(themeSelect.current.value)
    localStorage.setItem("theme", themeSelect.current.value)
  }
  return (
    <div>
      <link rel="stylesheet" href={"./themes/" + theme + ".css"} />
      <label className={styles.switch}>
        <select onChange={ChangeTheme} ref={themeSelect} defaultValue={theme}>
          {themes.map((theme) => <option className={styles.themeSwitch}>{theme}</option>)}
        </select>
      </label>
    </div>
  )
}
