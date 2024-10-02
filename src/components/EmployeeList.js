import React from 'react'
import Employee from './Employee';

export default function EmployeeList() {
    // const arr=["shuma","ruma","jhuma","tuma"];

    const employees=[
        {
            name: "prova",
            age: "23",
            country :"BD",
            gender: "female"
        },
        {
            name: "shaan",
            age: "1",
            country :"BD",
            gender: "female"
        },
        {
            name: "kalpana",
            age: "50",
            country :"BD",
            gender: "female"
        },
        {
            name: "donno",
            age: "25",
            country :"BD",
            gender: "male"
        }
    ];
  return (
    <div>
        {/* for only one array */}
        {/* {
            arr.map((element)=>{
                return <h5>{element}</h5>
            })
        } */}

     {/* without distructuring */}
        {/* {
            employees.map((employee)=>{
                return <h5>{ `Name: ${employee.name} Age: ${employee.age
                } Country: ${employee.country} gender: ${employee.gender}`}</h5>
            })
        } */}


        {/* by using distructuring */}
    {/* {
        employees.map((employee)=>{
            const { name,age,country,gender}=employee;
            return <h5>
                {
                    `Name: ${name} Age: ${age} Country: ${country} Gender: ${gender}` 
                }
            </h5>
        })
    } */}

    {/* now create employee.js and put the code into that file */}
    {
        employees.map((employee)=>
            <Employee
         name={employee.name}
         age={employee.age}
         country={employee.country}
         gender={employee.gender}
          />
        )
    }
    </div>
  )
}
