import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Header from '../Header/Header'
import {useCart} from 'react-use-cart'
import { TrashFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Cart() {
    const {isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart}=useCart();
    if (isEmpty) return <h3 > <Header/> Your cart is empty</h3>;
  return (
    <>
       <Header/> 
       <Container fluid className='py-4' style={{backgroundColor:'beige'}}>
        <Row className='justify-content-center'>
           <Col className='col-12'>
            <h5>Cart ({totalUniqueItems}) Total Items:({totalItems})</h5>
            <table className='table table-light table-hover m-0'>
                <tbody>
              {
                items.map((item,index)=>{
                    return(
                    <tr key={index}>
                        <td>
                          <img src={item.img} style={{height:'6rem'}} />  
                        </td>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>Quantity({item.quantity})</td>
                        <td>
                          <button className='btn btn-dark ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                          <button className='btn btn-dark ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity+1)} >+</button>
                          <button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)} ><TrashFill size={20} /></button>
                        </td>
                    </tr>
                    )
                })

              }
              </tbody>
            </table>
           </Col>
           <Col className='col-auto ms-auto pt-1'>
            <h3> <button style={{borderColor:'white'}}> Total Price: $ {cartTotal}</button> </h3>
           </Col>
           <Col className='col-auto '>
            <Link to={'/checkout'}>  <button className='btn btn-dark '  >Checkout</button>.</Link>
           <button className='btn btn-dark' onClick={()=>emptyCart()}>Clear Cart</button>
           </Col>
        </Row>
       </Container>
    </>
  )
}

export default Cart