import React from 'react'

export default function Inline() {
    const h44= {
        fontSize : '40px',
        color: 'blue'
    }
    const h55={
        fontSize : '10px',
        color: 'red'
    }
  return (
    <div>
        <h4 style={h44}>This is h4</h4>
        <h5 style={h55}>This is h5</h5>
    </div>
  )
}
