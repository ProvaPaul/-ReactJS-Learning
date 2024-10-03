import React, { useState } from 'react'

export default function Counter2() {
    const [count,setCount]=useState(0);
    const inititalCount=0;
    const increment=()=>
        { 
            setCount(prevCount=>prevCount+1);
            setCount(prevCount=>prevCount+1);
            setCount(prevCount=>prevCount+1);
        }
    const decrement=()=>{
        setCount(prevCount=>prevCount-1);
        setCount(prevCount=>prevCount-1);
    }
  return (
       <div>
        <h3>Count is : {count}</h3>
        <button onClick={increment}>increment</button><br/>
        {/* <button onClick={()=>setCount(count-1)}>decrement</button><br/> */}
        <button onClick={decrement}>decrement</button><br/>
        <button onClick={()=>setCount(inititalCount)}>Reset</button><br/>
       </div>
  )
}
