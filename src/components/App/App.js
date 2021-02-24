import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      makeup: []
    }
  }

  render() {
    return (
      <div className="App">
      <h1>FaceIt</h1>
      </div>
    );
  }
}

export default App;
