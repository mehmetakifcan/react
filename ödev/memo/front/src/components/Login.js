import React from 'react'
import "../Stylesheet/Login.css"
import {NavLink} from "react-router-dom"
import { useState } from 'react'
import  {useNavigate}  from "react-router-dom";
import axios from 'axios'
export const Login = () => {
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();
const data={
  username:username,
  password:password
}
const url="http://localhost:5001/signin"
  const signup=(e)=>{
    e.preventDefault();
    console.log(data)
    axios.post(url, data)
    .then(response => {
      
      
      navigate("/main");
    })
    .catch(error => {
      alert("şifre hatalı")
    });
    setPassword("")
    setUsername("")
    
  }
  return (
    <div className="form">
    <form>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }}/>
        
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        
      </div>
      <div className="button-container">
        <input type="submit" onClick={signup}/>
      </div>
    </form>
   
   <NavLink to="/uyeol">üye ol</NavLink>
  </div>
  )
}
