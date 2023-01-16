import { Card } from "react-bootstrap"
import React from "react"
function ItemCardHome(props) {

 
    return (
  
     <>
      <Card  style={{ width: '18rem',backgroundColor:'beige', cursor:'pointer',marginBottom:'20px'}}>
      <Card.Img variant="top" src={props.img} />
      </Card>
  
    </>
      
    )
  }
  
  export default ItemCardHome