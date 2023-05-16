import React, { useState } from 'react'
import "../Stylesheet/Login.css"
import {NavLink} from "react-router-dom"
import axios from 'axios'
export const Signup = () => {
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
const data={
  username:username,
  password:password
}
const url="http://localhost:5001/signup"
  const signup=(e)=>{
    e.preventDefault();
    console.log(data)
    axios.post(url, data)
    .then(response => {
      console.log('İstek başarılı. Sunucu yanıtı:', response.data);
    })
    .catch(error => {
      console.error('İstek sırasında bir hata oluştu:', error);
    });
    setPassword("")
    setUsername("")

  }
  return (
    <div>
      <form action="POST">
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="username" value={username} onChange={(e)=>{
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
        <input type="submit" onClick={signup} />
      </div>
    </form>
        <NavLink to="/">login sayfasına gider</NavLink>
    </div>
  )
}
