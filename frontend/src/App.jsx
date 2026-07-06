import { useState } from 'react'
import './style/App.css'
import NavBar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import AddTask from './components/AddTask'
import List from './components/List'
import UpdateTask from './components/UpdateTask'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Protected from './components/Protected.jsx'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
<Routes>
  <Route path="/" element={<Protected><List /></Protected>} />
  <Route path="/add" element={<Protected><AddTask /></Protected>} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<Login />} />
  <Route path="/update/:id" element={<UpdateTask />} />

</Routes>
    </>
  )
}

export default App
