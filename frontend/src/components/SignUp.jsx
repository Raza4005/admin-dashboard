import { useState, useEffect } from 'react'
// import './style/addtask.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


 function SignUp(){
    const [userData, setUserData] = useState({})
    const navigate = useNavigate();
        useEffect(()=>{
        if(localStorage.getItem("login"))
            navigate("/")
    })

    const handleSignUp= async()=>{
    console.log(userData);
    let result= await fetch('http://localhost:3200/signup',{
    method:'Post',
    'credentials': 'include',
    body:JSON.stringify(userData),
    headers:{
    'Content-Type':'Application/json',
    }
    })
    result= await result.json()
    if(result){
    console.log(result);
    document.cookie = "token=" + result.token
        localStorage.setItem("login",userData.email)
    navigate("/")
    }
}
    
    return(
        <div className="container">
            <h1>Sign Up</h1>

            <label htmlFor="Name">Name</label>
            <input onChange={(event) => setUserData ({...userData, name : event.target.value})} type="text" name="name" placeholder="Enter user name" />

            <label htmlFor="Email">Email</label>
            <input onChange={(event) => setUserData ({...userData, email : event.target.value})} type="email" name="email" placeholder="Enter user email" />

            <label htmlFor="Password">Password</label>
            <input onChange={(event) => setUserData ({...userData, password : event.target.value})} type="password" name="password" placeholder="Enter user password" />
            
            <button onClick={handleSignUp} className="submit">Sign up</button>
            <Link className='link' to="/login">Already have an account? Login</Link>
        </div>
    )
}

export default SignUp