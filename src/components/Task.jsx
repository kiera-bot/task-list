import React from "react";

const Task = props =>{
    const {task, index, list, setList} =props;
    
    const onChange=()=>{
        {
            task.isDone?
            task.isDone = false:
            task.isDone = true
        }
        setList([...list])
    }
   
    const onClick =()=>{
        setList(()=>list.filter(task => list.indexOf(task) !== index))
    }

    return(
        <div>
            {
            task.isDone?
            <p className="done">{task.name}</p>:
            <p>{task.name}</p>  
            }  
            <div>
                
                <input type="checkbox" name="checkbox" onChange={onChange} checked={task.isDone}/>
                <label htmlFor="checkbox">Done?</label>
                <br></br>
                <button className="del" onClick={onClick}>Delete</button>
            </div>
            <div className="spider-web"></div>
        </div>
    );
};


export default Task;