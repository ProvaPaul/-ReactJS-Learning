import React, { useEffect, useState } from 'react'

export default function EffectExample() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`you clicked ${count} times!`
    })
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
