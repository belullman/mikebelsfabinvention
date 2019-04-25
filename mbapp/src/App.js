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
      results: [],
      pictures: []
    };
  }

  getRecipes = (theme) => {
    // let catSearch = prompt("What do u wanna search, bich?");
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + theme)
      .then(response => { 
        // console.log(response.data.collection.items[4].links[0].href)
 
       let recipe = response.data.meals
       recipe.forEach(rec => {
         if (rec.meals) {
           this.setState({pictures: rec.meals})
          //  console.log(rec.meals[0])
         }
        });
        this.setState({pictures: response.data.meals})
        console.log(response.data.meals[0].strMealThumb);
      })
      .catch(error => { 
        console.log(error);
      });
  };

  render() {
    let myRecipes  = [];
    myRecipes = this.state.pictures;
    let images = [];
    if (myRecipes.length > 1) {
      images = myRecipes.map(r => {
        if (r){
          // console.log(r);
          return (
            <div>
              <img src = {r.strMealThumb} />
              <br></br>
            </div>
          )
        }
      });
    };



    return (
      <div>
        <NavBar/>
        <div> . </div>
        <div> . </div>
        <div style={{ color: 'white' }}> . </div>
        <FoodThemes getRecipes = {this.getRecipes}/>
        {/* <div visibility={this.state.visible}> <p>Work in progress.</p></div> */}
        {/* <button onClick = {() => this.getRecipes("Mexican")}>get a recipe bich</button> */}
        {/* <img src = {this.state.pictures} />; */}
        <center> 
          <div> 
            {images[Math.floor(Math.random() * images.length)]}
          </div>
        </center>
        {/* <div><p>Work in progress.</p></div> */}
      </div>
    );
  }
}

export default App;
