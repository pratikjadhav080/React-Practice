
import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  const [mouseposition, Setmouseposition] = useState("")

  const mouselocation = (e)=>{
    Setmouseposition(`${e.clientX}-${e.clientY}`)
  }

  return <div onMouseMove={mouselocation} style={{backgroundColor:"orange",color:"white",height:500,width:500}}>
    <h1>Mouse Position : {mouseposition}</h1>
    <input
      onKeyUp={(e) => {   //this cud be any key on the keyboard...
        console.log('Triggered because this input lost focus');
      }}
      placeholder="onBlur is triggered when you click this input and then you click outside of it."
    />
    <Counter/>
  </div>
}

export default App;
