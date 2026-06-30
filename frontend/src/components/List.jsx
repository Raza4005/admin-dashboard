import React, { Fragment, useEffect, useState } from "react";
import "../style/list.css";
import { Link, useParams } from "react-router-dom";


function List() {

  const [taskData, settaskData] = useState([]);
 
  useEffect(()=>{
    getListData();
  },[])
   
  const getListData= async () => {
  let list = await fetch('http://localhost:3200/tasks');
  list = await list.json()
  console.log('list');
  if(list.success){
    settaskData(list.result)
  }
  }

    const deleteTask= async (id) => {
  let item = await fetch('http://localhost:3200/delete/'+id,{method:"delete"});
  item = await item.json()
  if(item.success){
    console.log("Task Deleted")
  }
  }
    
  return (
    <div>
    <h1>To Do List</h1>
    <ul className="list-container">
<li className="list-header">S.no</li>
<li className="list-header">Title</li>
<li className="list-header">Description</li>
<li className="list-header">Action</li>


{
    taskData && taskData.map((item,index)=>(
        <Fragment key={item._id}>
        <li className="list-item">{index+1}</li>
        <li className="list-item">{item.title}</li>
        <li className="list-item">{item.description}</li>
        <li className="list-item" >
        <button onClick={()=>deleteTask(item._id)} className="btns">Delete</button>
        <Link className="update-btns" to={`/update/${item._id}`} >Update</Link>
        </li>

        </Fragment>
    ))
}
    </ul>
    </div>
  )
}

export default List