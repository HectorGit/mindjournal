import React, { Component } from 'react';
import './App.css';
import Hello from './Components/Hello'
import EntryForm from './Components/EntryForm'

class App extends Component {
  render() {
    return (
      <div className="App">


        <Hello/>
        <EntryForm/>

      </div>
    );
  }
}

export default App;
