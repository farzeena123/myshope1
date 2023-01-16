import React, { useEffect } from 'react'
import Header from '../Header/Header'
import {Modal,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {runFireworks} from '../Payment/Utiils'

function OrderSuccess() {
  useEffect(()=>{
    localStorage.clear();
    runFireworks();
  },[])
  return (
    <div className='ordersuccess'>
      <Header/>
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header className='justify-content-center' >
          <Modal.Title   >Order Status</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p style={{marginLeft:'90px'}} >Your Order Placed Successfully!</p>
        </Modal.Body>
        <Modal.Footer className='justify-content-center' >
        <Button  variant="success"> <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Continue Shopping</Link> </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>
  )
}

export default OrderSuccess