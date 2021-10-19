import {Hello} from './components/Helloworld.js';
import {Practice} from './components/Button';


function App() {

  const img = {
    a : "https://miro.medium.com/max/1400/1*CeuWv9fCjD1uTiTuKytnBQ.png"
  }
  return (
    <div>
      <h1>Hello Ji</h1>
      <Hello a={123} b="Pratik"/>
      <Hello a={222} b="Priyanka"/>
      <Hello />
      <Practice link = {img.a}/>
    </div>
  )
}

export default App;
