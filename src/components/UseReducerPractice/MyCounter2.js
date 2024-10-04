import { queryAllByDisplayValue } from '@testing-library/react';
import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'

// handing by multiple state as object

const initialState={
    counterA: 0,
    counterB: 15
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,counterA: state.counterA+ action.value}
        case 'decrement':
            return {...state,counterA: state.counterA-action.value}
        case 'incrementB':
            return {...state,counterB: state.counterB+action.value}
        case 'decrementB':
            return {...state,counterB: state.counterB-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function MyCounter2() {
    const [count,dispatch]= useReducer(reducer,initialState)
  return (
    <div>
        <h3>Value of CounterA: {count.counterA}</h3>
        <h3>Value of CounterB: {count.counterB}</h3>
        <button onClick={()=>dispatch({type: "increment",value: 1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type: "increment",value:5})}>Increment 5</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
        <div>
            <button onClick={()=>dispatch({type:"incrementB",value: 1})}>IncrementB</button>
            <button onClick={()=>dispatch({type:"decrementB" ,value:1})}>DecrementB</button>
        </div>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

    </div>
  )
}
