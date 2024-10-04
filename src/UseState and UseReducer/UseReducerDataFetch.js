import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
const initialState={
    loading:true,
    error:"",
    post:{}
    
}
const reducer=(state,action)=>{
switch(action.type){
    case "DATA_FETCH_SUCCESS":
        return{
            loading:false,
            post: action.payload,
            error: ""
        }
    case "DATA_FETCH_ERROR":
            return{
                loading:false,
                post: {},
                error: "oops something went wrong!"
            }
    default:
        return state;
  }
}
export default function UseReducerDataFetch() {
  const [state,dispatch]=useReducer(reducer,initialState); 
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=>{
        dispatch({type:"DATA_FETCH_SUCCESS",payload: res.data})
    })
    .catch((err)=>{
        dispatch({type: "DATA_FETCH_ERROR"})
    })
})
  return (
    <div>
         {
            state.isloading ? 'data is loading' : state.post.body
        }
        {
            state.error ? state.error : null
        }
    </div>
  )
}
