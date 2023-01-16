import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ItemCard from './ItemCard'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function Products() {
  return (
    <>
    <Header/>
   <h2 className='text-center mt-3'>ALL PRODUCTS</h2>
   <hr/>
   <Container  className='py-4' style={{display:'flex'}}>
    <Row className='justify-content-center ' >
      <ItemCard /> 
    </Row>
   </Container><hr/>
   <Footer/>
   </>
  )
}

export default Products