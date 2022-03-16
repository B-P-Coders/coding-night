import { useState } from "react";
import * as styles from "../styles/"

export default AddTaskForm({ addTask })
{
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    addTask(value)
    setValue("")
  }
  return(
    <form onSubmit={handleSubmit} classname={styles.form}>
      <input type="text" value={value} placeholder="Task" onChange={(e) => setValue(e.target.value)} />
      <button type="submit">{/* ikona + */}</button>
    </form>
  )
}
