import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Tasker from './components/Tasker'
import './App.css';

function App() {
  const setDefaultHeaders = () => {
    
  }
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
