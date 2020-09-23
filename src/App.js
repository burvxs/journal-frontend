import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Tasker from './components/Tasker'
import CategoryList from "./components/CategoryList";
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
        <Route path="/" component={Tasker}/>
        <Route path="/" component={CategoryList}/>
      </Router>
    </div>
  );
}

export default App;
