import React, { useState } from 'react'
import "../Stylesheet/Content.css"
export const Content = ({sorular,count,score,setScore,setCount}) => {
  
  let dogru=(e)=>{
    
    if(e.target.value==sorular[count].cevap){
      setScore(score+10)
    }
    
    if(count<sorular.length-1){
      setCount(count+1)
    }
    
  }
  
  return (
    <div className='content'>
      <p>{score}</p>
    <p>{sorular[count].soru}</p>
    <div className='cevap'>
    <button value={sorular[count].secenek1} onClick={(e)=>{dogru(e)}}>{sorular[count].secenek1}</button>
    <button value={sorular[count].secenek2} onClick={(e)=>{dogru(e)}}>{sorular[count].secenek2}</button>
    <button value={sorular[count].secenek3} onClick={(e)=>{dogru(e)}}>{sorular[count].secenek3}</button>
    <button value={sorular[count].secenek4} onClick={(e)=>{dogru(e)}}>{sorular[count].secenek4}</button>
    </div>
    
    </div>
  )
}
