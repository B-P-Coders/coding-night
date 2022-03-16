import { useState } from "react";
import * as styles from "../styles/addtaskform.module.css"

export default function AddTaskForm({ addTask })
{
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    addTask(value)
    setValue("")
  }
  return(
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} type="text" value={value} placeholder="Task" onChange={(e) => setValue(e.target.value)} />
      <button className={styles.button} type="submit">+</button>
    </form>
  )
}
