import React, { useState } from 'react'
import "../Stylesheet/Next.css"
export const Next = ({setCount,count,sorular}) => {
 
  return (
    <div className='next' onClick={()=>{
      if(count<sorular.length-1){
        setCount(count+1)
      }
      else{
        
        setCount(sorular.length-1)
      }
    }}>
        Next
    </div>
  )
}
