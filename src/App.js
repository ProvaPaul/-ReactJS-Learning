import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Cat from './images/cat.jpg';
import FuncComponent from './components/FuncComponent';
import TitleComponent from './components/TitleComponent';
import ClickEventHandler from './components/ClickEventHandler';
import UserLogin from './components/UserLogin';
import EmployeeList from './components/EmployeeList';
import RegularStyleSheet from './components/RegularStyleSheet';
import './components/myStyle.css'
import Inline from './components/Inline';
import './appStyle.css'
import moduleStyles from './myAppStyles.module.css'
import FormInput from './components/FormInput';
import Counter from './components/Hooks/Counter';
import Counter2 from './components/Hooks/Counter2';
import Counter3 from './components/Hooks/Counter3';
import HookStateArray from './components/Hooks/HookStateArray';
import EffectExample from './components/UseEffectPractice/EffectExample';
import EffectExample2 from './components/UseEffectPractice/EffectExample2';
import CleanupFunction from './components/UseEffectPractice/CleanupFunction';

function App() {
  return (
    <div className="App">
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
      <CleanupFunction/>
      </div>
  );
}

export default App;
