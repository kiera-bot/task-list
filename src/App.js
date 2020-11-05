import React, {useState} from "react";
import './App.css';
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <TaskForm list={list} setList={setList}/>
      <h2>Current Tasks:</h2>
      {list.map((task, t) => ( 
      <Task key={t} task={task} list={list} setList={setList} index={t}/>
      ))}
    </div>
  );
}

export default App;
