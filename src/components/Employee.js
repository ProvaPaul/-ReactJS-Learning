import React from 'react'

export default function Employee(props) {
    const { name,age,country,gender}=props;
    return <h5>
        {
            `Name: ${name} Age: ${age} Country: ${country} Gender: ${gender}` 
        }
    </h5>
}
