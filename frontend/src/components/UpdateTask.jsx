import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateTask() {
    const [taskData, setTaskData] = useState({});
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Update Task</h1>

            <label htmlFor="Title">Title</label>
            <input onChange={(event) => setTaskData({...taskData, title: event.target.value})} />

            <label htmlFor="Description">Description</label>
            <textarea onChange={(event) => setTaskData({...taskData, description: event.target.value})} />

            <button className="submit">Update Task</button>
        </div>
    );
}