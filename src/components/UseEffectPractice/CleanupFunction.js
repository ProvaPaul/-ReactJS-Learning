import React, { useEffect, useState } from 'react'

export default function CleanupFunction() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition =(e)=>{
        console.log('this is mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect is called')
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>
        <p>mouse position</p>
        coordinate X,Y - {x},{y}
    </div>
  )
}
