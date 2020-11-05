import React from "react";

const TaskForm = (props) =>{
    const {list, setList} = props
    let task = {
        name: "",
        isDone: false
    }

    const onChange =(event)=> {
        task.name = event.target.value;
    };

    const onClick =(event)=> {
        setList([...list, task]);

    };


    return (
        <div id="add-task">
            <h1>To-Do List</h1>
            <h4>Add a task:</h4>
            <input onChange={onChange} type="text" name="" />
            <button onClick={onClick}>Add</button>
        </div>
    );
}
export default TaskForm;