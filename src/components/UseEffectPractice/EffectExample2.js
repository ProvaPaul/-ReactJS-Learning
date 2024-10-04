import React, { useEffect, useState } from 'react'

export default function EffectExample2() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    useEffect(()=>{
        document.title=`you clicked ${count} times!`
        console.log('useEffect is called');
    },[count])
    // [count] deya mane kebol count change hoilei useEffect ta call hobe(it's known as conditional rendering!)
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
        <input
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

    </div>
  )
}
