import React, { Component } from 'react';
import './App.css';
import StartPage from './main/js/components/StartPage.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
       <StartPage />
      </div>
    );

  }
}

export default App;
