import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => <h1>HOME</h1>;
const About = () => <h1>This is AR</h1>;
const Contact = () => <h1>7355447648</h1> 

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact strict path='/about'><About /></Route>
        <Route exact strict path='/contact'><Contact /></Route>
        <Route exact path='/'><Home /></Route>
      </Switch>
    </Router>
  )
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);