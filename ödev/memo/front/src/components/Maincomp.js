import React, { useState } from 'react'
import "../Stylesheet/Maincomp.css"
import { Content } from './Content'
import { Next } from './Next'
import { Previus } from './Previus'
export const Maincomp = ({sorular,score,setScore}) => {
 const[count,setCount]=useState(0)
  return (
    <div className='Maincomp'>
        <Content sorular={sorular} score={score} setCount={setCount} setScore={setScore} count={count}></Content>
        <div className='buttons'>
           <Previus sorular={sorular} count={count} setCount={setCount}></Previus>
        <Next setCount={setCount} count={count} sorular={sorular}></Next> 
        </div>
        
    </div>
  )
}
