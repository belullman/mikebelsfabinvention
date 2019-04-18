import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Card, CardColumns, Button} from 'react-bootstrap';
class FoodThemes extends Component {


render() {
return (
<div>
   <div className="container" >
      <div className="row"></div>
      <CardColumns>
         <Card border="primary" style={{ width: '18rem' }}>
         <Card.Header>Italian Cuisine</Card.Header>
         <Card.Body>
            <Card.Title>Italian Cuisine</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Italian")}>Get recipe!</Button>
         </Card.Body>
         </Card>
         <br />
         <Card border="secondary" style={{ width: '18rem' }}>
         <Card.Header>Vietnamese Cuisine</Card.Header>
         <Card.Body>
            <Card.Title>Vietnamese Cuisine</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Vietnamese")}>Get recipe!</Button>
         </Card.Body>
         </Card>
         <br />
         <Card border="success" style={{ width: '18rem' }}>
         <Card.Header>Korean BBQ Cuisine</Card.Header>
         <Card.Body>
            <Card.Title>Korean BBQ Cuisine</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Korean")}>Get recipe!</Button>
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
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Italian")}>Get recipe!</Button>
         </Card.Body>
         </Card>
         <br />
         <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>Mexican Cuisine</Card.Header>
          <Card.Body>
            <Card.Title>Mexican Cuisine</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Mexican")}>Get recipe!</Button>
          </Card.Body>
          </Card>
          <br />
         <Card border="warning" style={{ width: '18rem' }}>
         <Card.Header>Japanese Cuisine </Card.Header>
         <Card.Body>
            <Card.Title>Japanese Cuisine</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary" onClick = {() => this.props.getRecipes("Japanese")}>Get recipe!</Button>
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