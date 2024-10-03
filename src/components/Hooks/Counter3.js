import React, { useState } from 'react'

export default function Counter3() {
    const [employee,setEmployee]=useState({name:"",country:""});
  return (
    <div>
        <input type='text' value={employee.name} onChange={(e)=>setEmployee({...employee,name: e.target.value})}></input><br></br>
        <input type='text' value={employee.country} onChange={(e)=>setEmployee({...employee,country: e.target.value})}></input>

        <div>
            <p>my name is: {employee.name}</p>
            <p>my country is:{employee.country}</p>
        </div>
        <p>{JSON.stringify(employee)}</p>
        
    </div>
  )
}
