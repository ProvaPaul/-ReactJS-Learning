import { queryAllByDisplayValue } from '@testing-library/react';
import React, { useReducer } from 'react'

const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function MyCounter1() {
    const [count,dispatch]= useReducer(reducer,initialState)
    const [count2,dispatch2]= useReducer(reducer,initialState)
  return (
    <div>
        <h3>counter1: {count}</h3>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
        <div>
        <h3>Counter2: {count2}</h3>
        <button onClick={()=>dispatch2('increment')}>Increment</button>
        <button onClick={()=>dispatch2('decrement')}>Decrement</button>
        <button onClick={()=>dispatch2('reset')}>Reset</button>
        </div>

    </div>
  )
}
