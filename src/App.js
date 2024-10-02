import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import Cat from './images/cat.jpg';
function App() {
  return (
    <div className="App">
      <Demo name="putu" country="BD"/>
      <Demo name="cutu" country="BD"/>
      <Demo name="eutu" country="BD"/>
      <Demo name="outu" country="BD">
        <p>I'm from BD</p>
        <h5>This is the chief guest of our department</h5>
        <img src={Cat}></img>

      </Demo>
      </div>
  );
}

export default App;
