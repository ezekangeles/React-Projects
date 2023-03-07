import React from "react"

const Task = (props) =>{
    return (
        <div className="task" style={{backgroundColor: props.isCompleted ? 'green' : 'white'}}>
            <p>{props.taskName}</p>
            <button onClick={() => props.completedTask(props.id)}>completed</button>
            <button onClick={() => props.deleteTask(props.id)}>x</button>
        </div>
    )
}

export default Task