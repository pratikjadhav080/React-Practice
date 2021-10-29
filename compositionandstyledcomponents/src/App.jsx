import './App.css';
import Forms from "./components/Forms"
import {Button} from "./components/Custom/Button"
import { useState } from 'react';

function App() {

  const [color,setColor] = useState("dark")

  const signin = (e) =>{
    e.preventDefault()
    console.log("signin")
  }

  const signup = (e) =>{
    e.preventDefault()
    console.log("signup")
  }

  return (
    <div className="App">
      <Forms submit={signin}>
        <input type="text" placeholder="Name"/>
        <input type="password" placeholder="password"/>
        <input type="submit" value="sign-in"/>
      </Forms>
      <Forms submit={signup}>
        <input type="text" placeholder="Username"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm-Password"/>
        <input type="submit" value="sign-up"/>
      </Forms>

      <Button theme ={color}>Click Me</Button>
      <button onClick={()=>{setColor(color==="dark"? "light":"dark")}}>Toggle Theme</button>
    </div>
  );
}

export default App;
