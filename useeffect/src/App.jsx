// import { useState } from 'react';
import './App.css';
// import { Counter } from './components/Counter';
import { TODO } from './components/Todo';

function App() {

  // const [show,setShow] = useState(true)
  // const [local,setLocal] = useState(0)

  // const handlecounter= () =>{
  //   if(!show){

  //     // console.log(localStorage.getItem('count'))
  //     setLocal(Number(localStorage.getItem('count')))
      
  //   }
  //   setShow(!show)
  // }
  
  return <div>

    {/* {show?<Counter prop={local?local:37}/>:<div></div>}
    <button onClick={handlecounter}>{show?"Hide":"Show"}</button> */}

    <TODO/>
  </div>
}

export default App;
