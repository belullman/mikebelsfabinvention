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
         <Card.Header>Header</Card.Header>
         <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
               Some quick example text to build on the card title and make up the bulk
               of the card's content.
            </Card.Text>
         </Card.Body>
         </Card>
         <br />
         <Card border="secondary" style={{ width: '18rem' }}>
         <Card.Header>Header</Card.Header>
         <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
               Some quick example text to build on the card title and make up the bulk
               of the card's content.
            </Card.Text>
         </Card.Body>
         </Card>
         <br />
         <Card border="success" style={{ width: '18rem' }}>
         <Card.Header>Header</Card.Header>
         <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
               Some quick example text to build on the card title and make up the bulk
               of the card's content.
            </Card.Text>
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