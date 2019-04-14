import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import FoodThemes from './FoodThemes/FoodThemes';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div> . </div>
        <div> . </div>
        <div> . </div>
        <FoodThemes/>
        <p>Work in progress.</p>
      </div>
    );
  }
}

export default App;
