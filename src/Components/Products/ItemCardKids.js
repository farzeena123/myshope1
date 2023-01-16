import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCardKids(prop) {
  return (
  <>
    <Card  style={{ width: '18rem',backgroundColor:'beige', cursor:'pointer',marginBottom:'20px'}}>
    <Card.Img variant="top" src={prop.img} />
    </Card>

  </>
  )
}

export default ItemCardKids