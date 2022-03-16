import {useState} from 'react'
import AddTaskForm from '../components/AddTaskForm'

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
        <div className={StyleSheet.todolist}>
            {tasks.map((task, index) => (
                <div className={StyleSheet.todo}>
                    <span onClick={() => toggleTask(index)} className={task.isCompleted ? StyleSheet.todotest : StyleSheet.todocompleted}>
                        {task.text}
                    </span>
                </div>
                <button onClick={() => removeTask(index)}>
                    {/* ikonka smieci */}
                </button>
            ))}
            <AddTaskForm addTask={addTask}/>
        </div>
    )
}

// https://codepen.io/termyanen/pen/vMWoox
