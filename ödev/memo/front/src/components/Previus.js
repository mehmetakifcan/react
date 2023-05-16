import React from 'react'
import "../Stylesheet/Previus.css"
export const Previus = ({setCount,count,sorular}) => {
  return (
    <div className='previus' onClick={()=>{
      if(count>0){
        setCount(count-1)
      }
      else{
        
        setCount(0)
      }
    }}>
        Previus
    </div>
  )
}
