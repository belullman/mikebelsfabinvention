import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios";

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

  getRecipes = () => {
    // let catSearch = prompt("What do u wanna search, bich?");
    axios
      .get("https://images-api.nasa.gov/search?q=cat")
      .then(response => { 
        // console.log(response.data.collection.items[4].links[0].href)
        if (this.state.user != null){
          let pics =  response.data.collection.items
          pics.forEach(pic => {
            if (pic.links) {
              this.addPic(pic.links[0].href)
            }
          });
        }
        console.log("it worked!!!")
      })
      .catch(error => { 
        console.log(error);
      });
      alert("you are not logged in!")
  };

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
