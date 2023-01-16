import React, { useState } from "react";
import {Card,Col,Container,Row,Button,ListGroup,ListGroupItem,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header";
import {useCart} from 'react-use-cart'
import PayPal from "./PayPal";
import { Link } from "react-router-dom";

export default function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [address,setAddress]= useState('')
  const [phone,setPhone]=useState('')
  

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  
  
  
  const [checkout,setCheckout]=useState()
    const {cartTotal,items}=useCart()
  return (
  <>
    <Header/>
    <Container className="py-5">
      <Row>
        <Col md="8" className="mb-4">
          <Card className="mb-4">
            <Form onSubmit={handleSubmit}>
            <Card.Header className="py-3">
              <h5 className="mb-0">Billing details</h5>
            </Card.Header>
            <Card.Body>
              <Row className="mb-4">
                <Col>
                
                  <input  className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" id="form1" type="text"  required/><br />
                  
                  <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"id="form4"  type="email" required/><br />
                  
                  <textarea className="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Full Address" id="form3" type="text" required/><br />
                  <input  className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}  placeholder="Phone" id="form5"type="text" required/>
               </Col>
              </Row>
              <hr className="my-4" />
              <h5 className="mb-4">Payment</h5> 
              <input  type='radio'name="flexRadioDefault"id="flexRadioDefault1"/>  
              <label value='COD'>  COD</label>
              <button type="submit"  style={{marginLeft:'15px'}}  className="btn btn-dark">
              
                <Link   to={'/ordersuccess'} style={{textDecoration:'none',color:'white'}} >Place order</Link>
                </button>
              <br />
             <input type='radio' name="flexRadioDefault"id="flexRadioDefault2" />
              <label htmlFor="" value='paypal'>Paypal</label>
               
                {
                    checkout ?  (
                      <PayPal/> 
                  ) :(  
              <Button type="submit" className="btn btn-dark" style={{marginLeft:'5px'}} onClick={() => {setCheckout(true)}}  >
                Continue to checkout
              </Button>  )}
            </Card.Body>
            </Form>
          </Card>
        </Col>

        <Col md="4" className="mb-4">
          <Card className="mb-4">
            <Card.Header className="py-3">
              <h5 className="mb-0">Summary</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup>
              <ListGroupItem>
                {
                   items.map((item,index)=>{
                    return(
                  
                      <tr key={index}>
                      <th> <img src={item.img} style={{height:'6rem'}} alt="" /></th>
                      <td>{item.title} <br /> Price:${item.price} <br /> Quantity:{item.quantity}</td>
                      </tr>
                    )
                   })
                  }
              </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>${cartTotal}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Shipping
                  <span>$10</span>
                </ListGroupItem>
                <hr className="my-2"></hr>
                <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <span>Total</span>
                  </div>
                  <span style={{paddingLeft:'0px'}}>
                    
                    <strong>${cartTotal+10}</strong>
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}