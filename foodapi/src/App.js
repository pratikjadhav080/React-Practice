import './App.css';
import { Footer } from './Footer/Footer';
import { Home } from './Home/Home';
import { Navbar } from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
