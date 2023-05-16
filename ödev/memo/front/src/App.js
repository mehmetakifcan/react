import { useEffect, useState } from 'react';
import './App.css';
import { Maincomp } from './components/Maincomp';
import { Login } from './components/Login';
import {Routes,Route} from "react-router-dom"
import { Signup } from './components/Signup';
function App() {
  const[sorular,setSorular]=useState(["init"]);
  const [score,setScore]=useState(0);
  
  
  let getdata=()=>{
    fetch("http://localhost:5001/").then(res=>res.json()).then(data=>setSorular(data))
  }
 
  useEffect(() => {
   
    getdata()
    
  },[]);
  
  return (
    <div className="App">
      
<Routes>
  <Route path="/" element={<Login></Login>}></Route>
  <Route path="/main" element={<Maincomp score={score} setScore={setScore} sorular={sorular}></Maincomp>}></Route>
  <Route path="/uyeol" element={<Signup></Signup>}> </Route>
</Routes>
      
      
    </div>
  );
}

export default App;
