import { useState } from 'react'
import './style/App.css'
import NavBar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import AddTask from './components/AddTask'
import List from './components/List'
import UpdateTask from './components/UpdateTask'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
<Routes>
  <Route path="/" element={<List />} />
  <Route path="/add" element={<AddTask />} />
  <Route path="/update/:id" element={<UpdateTask />} />

</Routes>
    </>
  )
}

export default App
