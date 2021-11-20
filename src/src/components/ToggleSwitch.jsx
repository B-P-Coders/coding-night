import React, { useRef, useState } from 'react'
import styles from '../styles/toggle.module.css'

const themes = [
  "default",
  "falcon",
  "luna",
  "suna"
]

export default function ToggleSwitch ()
{

  const themeSelect = useRef()
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'default')

  function ChangeTheme()
  {
    setTheme(themeSelect.current.value)
    localStorage.setItem("theme", themeSelect.current.value)
  }
  return (
    <div>
      <link rel="stylesheet" href={"./themes/" + theme + ".css"} />
      <label className={styles.switch}>
        <select onChange={ChangeTheme} ref={themeSelect}>
          {themes.map((theme) => <option>{theme}</option>)}
        </select>
      </label>
    </div>
  )
}
