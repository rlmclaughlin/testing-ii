import React, { Component } from 'react'
import Display from './components/display'
import Dashboard from './components/dashboard'
import './App.css';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <Display /> 
        <Dashboard /> 
      </div>
    );
  }
}

export default App;
