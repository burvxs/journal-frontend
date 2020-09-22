import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Tasker from './components/Tasker'
import './App.css';
import axios from 'axios';

function App() {
  const setDefaultHeaders = () => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('jwt')}`
  }
  setDefaultHeaders();
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Tasker}/>
      </Router>
    </div>
  );
}

export default App;
