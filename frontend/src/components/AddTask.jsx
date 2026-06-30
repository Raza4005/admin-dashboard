import React, { useState } from "react";
// import axios from "axios";
import "../style/addtask.css";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();

const handleAddTask = async () => {
    console.log(taskData);
    
    let result = await fetch('http://localhost:3200/add-task', {
        method: 'POST',
        body: JSON.stringify(taskData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    result = await result.json();
    
    if (result) {
        navigate("/")
        console.log("New task added successfully");
    }
};

  return (
    <div className="container">
      <h1>Add New Task</h1>

      <label>Title</label>

      <input
        type="text"
        value={taskData.title}
        placeholder="Enter Title"
        onChange={(e) =>
          setTaskData({ ...taskData, title: e.target.value })
        }
      />

      <label>Description</label>

      <textarea
        rows="4"
        value={taskData.description}
        placeholder="Enter Description"
        onChange={(e) =>
          setTaskData({
            ...taskData,
            description: e.target.value,
          })
        }
      ></textarea>

      <button onClick={handleAddTask} className="submit">
        Add New Task
      </button>
    </div>
  );
};

export default AddTask;