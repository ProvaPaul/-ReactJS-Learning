import React from 'react'

export default function RegularStyleSheet(props) {
    const className=props.primary ? 'primary' : 'secondary'
  return (
    <div>
        <h1 className={className}>Hi title</h1>
    </div>
  )
}
