import { useState } from "react";

export default AddTaskForm({ addTask })
{
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    addTask(value)
    setValue("")
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="Task" onChange={(e) => setValue(e.target.value)} />
      <button type="submit">{/* ikona + */}</button>
    </form>
  )
}
