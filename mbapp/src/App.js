import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import FoodThemes from './FoodThemes/FoodThemes';
import firebase, { auth, provider } from "./firebase.js"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      results: []
    };
  }
  render() {
    return (
      <div>
        <NavBar/>
        <div> . </div>
        <div> . </div>
        <div> . </div>
        <FoodThemes/>
        {/* <div visibility={this.state.visible}> <p>Work in progress.</p></div> */}

        <div><p>Work in progress.</p></div>
      </div>
    );
  }
}

export default App;
