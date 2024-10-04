import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchMultiplePost() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log("responded")
            setPosts(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>
        <ul>
            {
                posts.map((post)=>(
                    <li key={post.id}>{post.body}</li>
                ))
            }
        </ul>
    </div>
  )
}
