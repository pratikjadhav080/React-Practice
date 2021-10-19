
import {Mobile} from './components/Mobile.js';

function App() {
  return (
  <div id="maindiv">
    <Mobile list={["Android", "BlackBerry", "Iphone", "Windows Phone"]} name="Mobile Operating System"/>
    <Mobile list={["Samsung", "HTC", "Micromax", "Apple"]} name="Mobile Manufactures"/>
  </div>)
}

export default App;
