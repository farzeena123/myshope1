import React,{useEffect, useState} from 'react'
import './Header.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CartFill, Gem} from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../Firebase/Config';
import { Nav } from 'react-bootstrap';
import {useCart} from 'react-use-cart'

function Header() {

  const {totalItems}=useCart()
  const [user,setUser]=useState()
  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
  },[])
  
  return (
     
      <div className='header'>
        <Navbar className='header' expand="lg">
      <Container fluid  >
        <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'black'}}><strong><Gem size={30} /></strong>MY SHOPE</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav >
            
               <Link to={'/products'}> <Button className='btn-dark btn m-2'>Products</Button></Link>
              
             <Link to={'/login'}> <Button className='btn btn-dark'>{user ? user.email:'Login'}</Button></Link>
             <Link to={'/cart'}> <Button variant='dark' className='rounded m-2' style={{width:'2.5rem',height:'2.5rem',position:'relative'}} > <CartFill   />  
             <div className='rounded-circle d-flex bg-white justify-content-center align-items-center' 
              style={{
              position:'absolute',
              color:'black',
              width:'1rem',
              height:'1rem',
              bottom:0,
              right:0,
              transform:'translate(25%,25%)'
              }} >({totalItems})</div>  </Button></Link>
        
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>

  )
}

export default Header