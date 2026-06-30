import { useState } from 'react'
import './style/App.css'
import NavBar from './components/Navbar.jsx'
import { Routes, Route } from "react-router-dom";
import AddTask from './components/AddTask.jsx'
import List from './components/List.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
<Routes>
  <Route path="/" element={<List />} />
  <Route path="/add" element={<AddTask />} />
</Routes>
    </>
  )
}

export default App
