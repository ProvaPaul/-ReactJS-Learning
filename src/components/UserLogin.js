import React from 'react'

export default function UserLogin() {
   const isLoggedIn =false;
   const isInDhaka=true;
   const logged=true;
  return (
    <div>
        {/* ternary */}
        {
            isLoggedIn ? <h1>Hi I'm prova </h1>
            : <h1>Hi I'm Kalpana</h1>
        }
        {
            isInDhaka?<h5>Kalpana</h5>
            : <h5>Prova</h5>
        }

        {/* short secret approch (either display the first or nothing to display)*/}
        {
            logged && <h5>Showing on the screen</h5>
        }

    </div>
  )
}
