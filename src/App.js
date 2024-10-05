import logo from './logo.svg';
import './App.css';
import Demo from './components/BasicTopics/Demo';
import Cat from './images/cat.jpg';
import FuncComponent from './components/BasicTopics/FuncComponent';
import TitleComponent from './components/BasicTopics/TitleComponent';
import ClickEventHandler from './components/BasicTopics/ClickEventHandler';
import UserLogin from './components/BasicTopics/UserLogin';
// import EmployeeList from './components/BasicTopics/EmployeeList';
import RegularStyleSheet from './components/BasicTopics/RegularStyleSheet';
import './components/BasicTopics/myStyle.css'
import Inline from './components/BasicTopics/Inline';
import './appStyle.css'
import moduleStyles from './myAppStyles.module.css'
import FormInput from './components/BasicTopics/FormInput';
import Counter from './components/Hooks/Counter';
import Counter2 from './components/Hooks/Counter2';
import Counter3 from './components/Hooks/Counter3';
import HookStateArray from './components/Hooks/HookStateArray';
import EffectExample from './components/UseEffectPractice/EffectExample';
import EffectExample2 from './components/UseEffectPractice/EffectExample2';
import CleanupFunction from './components/UseEffectPractice/CleanupFunction';
import MouseCountainer from './components/UseEffectPractice/MouseCountainer';
import FetchMultiplePost from './components/DataFetching/FetchMultiplePost';
import FetchMultiplePost2 from './components/DataFetching/FetchMultiplePost2';
import MyCounter1 from './components/UseReducerPractice/MyCounter1';
import MyCounter2 from './components/UseReducerPractice/MyCounter2';
import MyCounter3 from './components/UseReducerPractice/MyCounter3';
import React, { Component, useReducer } from 'react';

import ComponentA from './components/UseContextWithReducer/ComponentA'
import ComponentX from './components/UseContextWithReducer/ComponentX'
import ComponentZ from './components/UseContextWithReducer/ComponentZ'
import UseStateDataFetch from './components/UseState and UseReducer/UseStateDataFetch';
import UseReducerDataFetch from './components/UseState and UseReducer/UseReducerDataFetch';
import MainComponent from './components/UseCallBackHook/MainComponent';
import MyMemoCounter from './components/UseMemoHook/MyMemoCounter';
import FocusInput from './components/useRefHook/FocusInput';
import Timer from './components/useRefHook/Timer';
// for understanding useState and useReducer

// export const CountContext = React.createContext()
// const initialState=0;
// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment':
//             return state+1
//         case 'decrement':
//             return state-1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  // const [count,dispatch]=useReducer(reducer,initialState)
  return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
    {/* //   Count: {count}
    //   <ComponentA/>
    //   <ComponentX/>
    //   <ComponentZ/> */}
      {/* <Demo name="putu" country="BD"/>
      <Demo name="cutu" country="BD"/>
      <Demo name="eutu" country="BD"/>
      <Demo name="outu" country="BD">
        <p>I'm from BD</p>
        <h5>This is the chief guest of our department</h5>
        <img src={Cat}></img>

      </Demo>
      <FuncComponent/> */}
      {/* <TitleComponent/> */}
      {/* <ClickEventHandler/> */}
      {/* <UserLogin/> */}
      {/* <EmployeeList/> */}
      {/* <StudentList/> */}
      {/* <RegularStyleSheet primary={true} />
      <Inline/> */}

      {/* <h5 className='error'>Error!!</h5>
        <h5 className={moduleStyles.success}>Success!!</h5> */}
      {/* <FormInput/> */}
      {/* <Counter/> */}
      {/* <Counter2/> */}
      {/* <Counter3/> */}
      {/* <HookStateArray/> */}
      {/* <EffectExample/> */}
      {/* <EffectExample2/> */}
      {/* <CleanupFunction/> */}
      {/* <MouseCountainer/> */}
      {/* <FetchMultiplePost/> */}
      {/* <FetchMultiplePost2/> */}

      {/* <MyCounter1/> */}
      {/* <MyCounter2/> */}
      {/* <MyCounter3/> */}

      {/* <UseStateDataFetch/> */}
      {/* <UseReducerDataFetch/> */}
      {/* <MainComponent/> */}
      {/* <MyMemoCounter/> */}
      {/* <FocusInput/> */}
      <Timer/>

      </div>
    // </CountContext.Provider>
    
  );
}

export default App;
