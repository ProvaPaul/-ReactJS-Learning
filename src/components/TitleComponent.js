import React, { useState } from 'react'

export default function TitleComponent() {
    const[title,setTitle]=useState('ReactJS Course for Beginner!')
  return (
    <div>
        <h3>{title}</h3>
        <button onClick={()=>setTitle('Ultimate React Hooks Course')}>Change Title</button>
    </div>
  )
}
