import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName={'active'} exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName={'active'} exact>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName={'active'} exact>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' render={() => <Home title='Hello there' />} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/products/:product/color/:color' component={Products} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
