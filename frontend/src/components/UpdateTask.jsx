import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateTask() {
    const [taskData, setTaskData] = useState({
        title: "",
        description: ""
    });
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(()=>{
    getTask(id)
    },[])

    const getTask = async(id) =>{
    let task = await fetch(`http://localhost:3200/task/`+id);
    task = await task.json()
    if(task.result){
    setTaskData(task.result)
    }
}
const updateTask = async () => {
  console.log("function called", taskData);
  let task = await fetch("http://localhost:3200/update-task", {
    method: 'put',
    body: JSON.stringify(taskData),
    headers: {
    'Content-Type': 'Application/Json'
    }
  });

  task = await task.json()
  if (task) {
    navigate('/')
  }
}

    return (
        <div className="container">
            <h1>Update Task</h1>

            <label htmlFor="Title">Title</label>
            <input value = {taskData.title} onChange={(event) => setTaskData({...taskData, title: event.target.value})} />

            <label htmlFor="Description">Description</label>
            <textarea value = {taskData.description} onChange={(event) => setTaskData({...taskData, description: event.target.value})} />

            <button onClick={updateTask} className="submit">Update Task</button>
        </div>
    );
}