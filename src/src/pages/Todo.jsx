import {useState} from 'react'
import { ImBin } from "react-icons/im";
import AddTaskForm from '../components/AddTaskForm'
import Layout from "../components/Layout"
import * as styles from "../styles/todo.module.css"

export default function Todo()
{
    const [tasks, setTasks] = useState([{text: "Sample", isCompleted: false}])
    const addTask = text => setTasks([...tasks, {text: text, isCompleted: false}])
    const toggleTask = index => {
        const newTasks = [...tasks]
        newTasks[index].isCompleted = !newTasks[index].isCompleted
        setTasks(newTasks)
    }
    const removeTask = index => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }

    return(
      <Layout>
        <div className={styles.todolist}>
            {tasks.map((task, index) => (
              <div className={styles.todo} key={index}>
                    <span className={task.isCompleted ? styles.todocompleted : styles.todotest} onClick={() => toggleTask(index)}>
                        {task.text}
                    </span>
                    <button onClick={() => removeTask(index)}>
                        <ImBin/>
                    </button>
                </div>
            ))}
        </div>
        <AddTaskForm addTask={addTask}/>
      </Layout>
    )
}
