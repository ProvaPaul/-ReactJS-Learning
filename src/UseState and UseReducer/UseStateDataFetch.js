import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UseStateDataFetch() {
    const [isloading,setIsLoading]=useState(true)
    const [error,setError]=useState('')
    const [post,setPost]=useState({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
            setIsLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch((err)=>{
            setIsLoading(false)
            setPost({})
            setError("Oops!Something went wrong!")
        })
    })
  return (
    <div>
        
        {
            isloading ? 'data is loading' : post.body
        }
        {
            error ? error : null
        }
    </div>
  )
}
