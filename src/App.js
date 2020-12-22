import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../src/views/Login/Login.js';
import Home from '../src/views/Home/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <Switch>
    <Route path='/login'>
      <Login />
    </Route>
    <Route path='/home'>
      <Home />
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
