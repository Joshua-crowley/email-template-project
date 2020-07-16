import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Nav/Nav';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/signup' exact component={Signup}/>
      <Route path='/login' exact component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
