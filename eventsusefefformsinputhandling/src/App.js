import {useState, useRef} from "react"
import './App.css';

function App() {

  const [count,setCount] = useState(0)
  const countRef = useRef(0);

  useEffect(()=>{
    handleCount()
  },[])

  const handleCount = () =>{
    countRef.current = setInterval(e => {

    })
  }

  return (
    <div className="App">
      Timer:{count}
      <button onClick={()=>{}}></button>
    </div>
  );
}

export default App;
