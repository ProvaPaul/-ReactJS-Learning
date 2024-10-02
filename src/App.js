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
      {/* <RegularStyleSheet primary={true} /> */}
      <Inline/>
      </div>
  );
}

export default App;
