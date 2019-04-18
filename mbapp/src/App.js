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

  getRecipes = (theme) => {
    // let catSearch = prompt("What do u wanna search, bich?");
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + theme)
      .then(response => { 
        // console.log(response.data.collection.items[4].links[0].href)
 
       // let pics =  response.data.collection.items
       // pics.forEach(pic => {
        //  if (pic.links) {
        //    console.log(pic.links[0].href)
        //  }
        //});
        //console.log("it worked!!!")
        console.log(response.data.meals);
      })
      .catch(error => { 
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <NavBar/>
        <div> . </div>
        <div> . </div>
        <div> . </div>
        <FoodThemes getRecipes = {this.getRecipes}/>
        {/* <div visibility={this.state.visible}> <p>Work in progress.</p></div> */}
        {/* <button onClick = {() => this.getRecipes()}>get a recipe bich</button> */}

        <div><p>Work in progress.</p></div>
      </div>
    );
  }
}

export default App;
