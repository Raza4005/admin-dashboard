import React, { Fragment, useEffect, useState } from "react";
import "../style/list.css";
import { Link, useParams } from "react-router-dom";


function List() {

  const [taskData, settaskData] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

 
  useEffect(()=>{
    getListData();
  },[])
   
  const getListData= async () => {
  let list = await fetch('http://localhost:3200/tasks',{
    credentials: 'include',
  });
  list = await list.json()
  console.log('list');
  if(list.success){
    settaskData(list.result)
  }
  else{
        alert("try later")
    }
  }

    const deleteTask= async (id) => {
  let item = await fetch('http://localhost:3200/delete/'+id,{method:"delete",
  credentials: 'include',
});
  item = await item.json()
  if(item.success){
    console.log("Task Deleted")
  }
  else{
        alert("try later")
    }
  }

  const seletedAll = (event) => {
    if(event.target.checked){
      let items = taskData.map((item) => item._id);
      setSelectedTasks(items);
    }
    else{
      setSelectedTasks([]);
    }
  }

  const selectSingleItem = (id) => {
    console.log(id);
    if (selectedTasks.includes(id)) {
        let items = selectedTasks.filter((item) => item !== id);
        setSelectedTasks([items]);
    } else {
        setSelectedTasks([id, ...selectedTasks]); 
    }
}

  const deleteMultiple = async () => {
        console.log(selectedTasks);
        let item = await fetch('http://localhost:3200/delete-multiple/', {
        credentials: 'include',
        method: 'DELETE', 
        body: JSON.stringify(selectedTasks), 
         headers: {
        'Content-Type': 'application/json' 
    }
});
        item = await item.json();
        if (item.success) {
        getListData();
}
else{
        alert("try later")
    }
  }
  
  
  return (
    <div>
    <h1>To Do List</h1>
    <button onClick={deleteMultiple} className="btns delete-multiple" >Delete</button>
    <ul className="list-container">
<li className="list-header"><input onChange={seletedAll}  type="checkbox" /></li>
<li className="list-header">S.no</li>
<li className="list-header">Title</li>
<li className="list-header">Description</li>
<li className="list-header">Action</li>


{
    taskData && taskData.map((item,index)=>(
        <Fragment key={item._id}>
        <li className="list-item"><input onChange = {()=> selectSingleItem(item._id)} checked = {selectedTasks.includes(item._id)} type="checkbox" /></li>
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