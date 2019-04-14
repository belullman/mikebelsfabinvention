import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';


class FoodThemes extends Component {
 
  render() {
    return (
      <div>
        <div className="container" >
          <div className="row"></div>
            <Card bg="light" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Light Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        



    )
  }
}

export default FoodThemes;