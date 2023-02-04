import logo from './logo.svg';
import './App.css';

function App() {
  const func = ()=>{
    console.log("Button Click");
  }
  return (
 
    <div>
    <button onClick={func}>Click me</button>
    </div>
  );
}

export default App;
