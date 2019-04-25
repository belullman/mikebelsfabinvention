import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Card, CardColumns, Button} from 'react-bootstrap';


import italian from './itfood.jpg';
import french from './frenfood.jpg';
import korean from './korfood.jpg';
import indian from './indfood.jpg';
import mexican from './mexfood.jpg';
import japanese from './japfood.jpg';

class FoodThemes extends Component {
render() {
return (
<div>
   <div className="container" >
      <div className="row"></div>
      <CardColumns>
         <Card border="primary" style={{ width: '18rem'}}>
         <Card.Header>Italian Cuisine</Card.Header>
         <Card.Body>
            <Card.Title>Italian Cuisine</Card.Title>
            <Card.Text>
            <img class="img-fluid img-thumbnail" src={italian} alt="Card image cap"></img>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Italian")}>Inspire Me!</Button>
         </Card.Body>
         </Card>
         <br />
         <Card border="secondary" style={{ width: '18rem' }}>
         <Card.Header>French Cuisine</Card.Header>
         <Card.Body >
            <Card.Title>French Cuisine</Card.Title>
            <img class="img-fluid img-thumbnail" src={french} alt="Card image cap"></img>
            <Card.Text>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("French")}>Inspire Me!</Button>
         </Card.Body>
         </Card>
         <br />
         <Card border="success" style={{ width: '18rem' }}>
         <Card.Header>Korean BBQ Cuisine</Card.Header>
         <Card.Body>
            <Card.Title>Korean BBQ Cuisine</Card.Title>
            <Card.Text>
            <img class="card-img-top" src={korean} alt="Card image cap"></img>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Canadian")}>Inspire Me!</Button>
         </Card.Body>
         </Card>
         <br />
      </CardColumns>
      <CardColumns>
      <Card border="danger" style={{ width: '18rem' }}>
         <Card.Header>Indian Cuisine</Card.Header>
         <Card.Body>
            <Card.Title>Indian Cuisine</Card.Title>
            <Card.Text>
            <img class="card-img-top" src={indian} alt="Card image cap"></img>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Indian")}>Inspire Me!</Button>
         </Card.Body>
         </Card>
         <br />
         <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>Mexican Cuisine</Card.Header>
          <Card.Body>
            <Card.Title>Mexican Cuisine</Card.Title>
            <Card.Text>
            <img class="card-img-top" src={mexican} alt="Card image cap"></img>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Mexican")}>Inspire Me!</Button>
          </Card.Body>
          </Card>
          <br />
         <Card border="warning" style={{ width: '18rem' }}>
         <Card.Header>Japanese Cuisine </Card.Header>
         <Card.Body>
            <Card.Title>Japanese Cuisine</Card.Title>
            <Card.Text>
            <img class="card-img-top" src={japanese} alt="Card image cap"></img>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Japanese")}>Inspire Me!</Button>
         </Card.Body>
         </Card>
         <br />
      </CardColumns>
      <br></br>
      
   </div>
</div>
)
}
}
export default FoodThemes;