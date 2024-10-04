import React, { useState } from 'react'
import CleanupFunction from './CleanupFunction'

export default function MouseCountainer() {
    const [display,setDisplay] =useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <CleanupFunction/>}
        {/* mane display jodi true hoy tahole cleanupfunction er kaaj hobe.Initially sheta true ejonno cleanup.js er kaj ta dekhabe.Toggle button e click korle sheta disapppear hoye jabe */}
    </div>
  )
}
