import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchMultiplePost2() {
    const [posts,setPosts]=useState([])
    const [id,setId]=useState();
    const [buttonClickId,setButtonClickId]=useState()

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
    .then((Response)=>{
        console.log(Response)
        setPosts(Response.data)
    })
    .catch((err)=>{
        console.log(err)
    })  
    },[buttonClickId])
    
    const handleId=()=>{
        setButtonClickId(id)
    }
  return (
    <div>
        <button type='button' value={id} onClick={handleId}>Fetch ID Details</button>
        <input
        type='text'
        onChange={(e)=>setId(e.target.value)}
        />
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
        
        </div>
  )
}
