
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Comonents/Header/Header';
import Home from './Comonents/Home/Home';
import Cart from './Comonents/Cart/Cart';

function App() {

  return (
    <BrowserRouter>
    <span className='headTitle'>Shopping Website</span>
      <Header />
      <div className="App">
        
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart}  />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
