import React from "react";
import { useState } from "react";
import Task from './task'

const App = () =>{

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    //!Adding task to array
    const addTask = () =>{

        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            isCompleted: false
        }
        // const newTodoList = [...todoList, newTask]
        setTodoList([...todoList, task])
        // console.log(task.id);
    }

    //!onChange listener
    const handleChange = (e) =>{
        setNewTask(e.target.value)
    }

    //!delete button

    const deleteTask = (id) =>{
        setTodoList(todoList.filter((task) => task.id !== id))
    }

    //!Completed task
    const completedTask = (id) =>{
        setTodoList(todoList.map((task)=>{
            if (task.id === id){
                return {...task, isCompleted: true}
            }else{
                return task
            }
            
        }))
    }
    

    //!JSX
    return (
        <div className="app">
            <div className="addTask">
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}> Add Task </button>
            </div>

            <div className="list">
               {todoList.map((task,key) =>{
                return  (
                    <Task 
                    taskName = {task.taskName}
                    id={task.id}
                    deleteTask = {deleteTask}
                    key = {task.id}
                    completedTask = {completedTask}
                    isCompleted = {task.isCompleted}
                    /> 
                )    
               })}
            </div>
        </div>
    )
}

export default App