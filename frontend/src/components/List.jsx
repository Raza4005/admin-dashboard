import React, { useEffect, useState } from "react";
import "../style/list.css";

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
    
  return (
    <div>
    <h1>To Do List</h1>
    <ul className="list-container">
<li className="list-header">S.no</li>
<li className="list-header">Title</li>
<li className="list-header">Description</li>

{
    taskData && taskData.map((item,index)=>(
        <>
        <li className="list-item">{index+1}</li>
        <li className="list-item">{item.title}</li>
        <li className="list-item">{item.description}</li>
        </>
    ))
}
    </ul>
    </div>
  )
}

export default List