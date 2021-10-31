import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';


function App() {

  const [show,setShow] = useState(true)
  const [stop,setStop] = useState(false)
  const [local,setLocal] = useState(0)
  const [resume,setResume] = useState(false)

  const handlecounter= () =>{
    if(!show){

      setLocal(Number(localStorage.getItem('count')))
      
    }
    setShow(!show)
  }

  const stopcounter= () =>{
    setStop(!stop)
    setResume(false)
  }

  const resumecounter= () =>{
    setStop(!stop)
    setResume(!resume)
  }
  
  
  const resetcounter= () =>{
    window.location.reload(false);
  }
  

  return <div className="App">

    {show?<Counter resumecount={resume} stopcount={stop} endtime={50} prop={local?local:17}/>:<div></div>}
    <button onClick={handlecounter}>{show?"Hide":"Show"}</button>
    <button onClick={resetcounter}>Reset</button>
    <button disabled={stop} onClick={stopcounter}>Stop</button>
    <button disabled={resume} onClick={resumecounter}>Resume</button>

  </div>
}

export default App;
