import React, { useCallback, useState } from 'react'
import CounterComponent from './CounterComponent';
import ButtonComponent from './ButtonComponent';
 function MainComponent() {
    const [teachers,setTeachers]=useState(25);
    const [students,setStudents]=useState(30);

    const incrementTeachers=useCallback(()=>{
        setTeachers(teachers+5);
    },[teachers])

    const incrementStudents=useCallback(()=>{
        setStudents(students+10);

    },[students])
  return (
    <div>
        <h3>UseCallBack Practice</h3>
        <CounterComponent text='teachers' count={teachers}/>
        <ButtonComponent handleClick={incrementTeachers}>increment teachers</ButtonComponent>

        <CounterComponent text='students' count={students}/>
        <ButtonComponent handleClick={incrementStudents}>increment students</ButtonComponent>
    </div>
  )
}

export default React.memo(MainComponent)