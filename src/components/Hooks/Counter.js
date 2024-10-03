import React,{useState} from 'react'

export default function Counter() {
    const [count,setCount]=useState(0);
    // here 0 is the initial state which is actually the value of count
  return (
    <div>
        <h3>Counter is : {count}</h3>
        <button onClick={()=>setCount(count+1)}>Change Counter</button>
    </div>
  )
}
