import React, { useRef, useState } from 'react'
import styles from '../styles/toggle.module.css'
import { MdSchool, MdDarkMode, MdLightMode } from "react-icons/md";

export default function ToggleSwitch ()
{
  const [theme, setTheme] = useState(localStorage.getItem("theme") || true)

  function ChangeTheme()
  {
    setTheme(!theme)
    localStorage.setItem("theme", !theme)
  }
  return (
    <div>
      <link rel="stylesheet" href={"./themes/" + theme + ".css"} />
      <label className={styles.switch}>
        <div onClick={ChangeTheme}>
          {'true' === theme ? <MdLightMode/> : <MdDarkMode/> }
        </div>
      </label>
    </div>
  )
}

