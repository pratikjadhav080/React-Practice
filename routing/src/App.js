import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
import { SingleProduct } from './components/IndividualProduct';
import { Navbar } from './components/Navbar';
import { Product } from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Product/>
        </Route>

        <Route path="/products/:id">
          <SingleProduct/>
        </Route>

        <Route path="/notfound">
          <h1>404, Route Does not exist</h1>
          <Link to="/">
          <button>Go Back</button>
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
