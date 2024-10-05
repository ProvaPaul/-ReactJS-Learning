import React, { useEffect, useRef } from 'react'

export default function FocusInput() {

  useEffect(()=>{
    inputRef.current.focus() 
    // tahole input field er box the focus hoye jabe
  },[])

  const inputRef=useRef(null)
  return (
    <div>
      <input ref={inputRef} type='text'/>
    </div>
  )
}
