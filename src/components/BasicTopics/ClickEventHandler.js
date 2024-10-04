import React from 'react'

export default function ClickEventHandler() {
    function eventHandler(){
        console.log('You clicked the action button');
    }
  return (
    <div>
        <button onClick={eventHandler}>Action</button>
        {/* <button onClick={eventHandler()}>Action</button> */}
        {/* if we write eventHandler() then the function eventhandler will be automatically called and no need to click on the action button. So we won't add () after the function name */}
        </div>
  )
}
