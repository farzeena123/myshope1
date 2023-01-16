import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'

import { auth } from '../../Firebase/Config';
import {PatchCheckFill} from 'react-bootstrap-icons'
import Header from '../Header/Header';

function Signup() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState('')

  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name)
  }

 const register=async()=>{
  try{
 const user= await createUserWithEmailAndPassword(auth,email,password);
 console.log(user)
 }catch(error){
  console.log(error.message)
  alert(error.message)
 }
}

return (
    <>
    <Header/>
    <div className='signup'>
        <Container className='my-5'>
            <Row className='g-0'>
                <Col className='md-6'>
                    <Image style={{padding:'5px',width:'500px'}} src='https://i.pinimg.com/564x/12/01/64/1201641208476b86d649b27ac7b6452f.jpg'></Image>
                </Col>
              <Col className='md-6'>
                <Form>
                   <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h1 fw-bold mb-0 ">Register here</span>
                   </div>     
                   <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Signup your account</h5>

                  <div className="form-outline mb-4">
                     <input type="name" id="name"  value={name} onChange={(e)=>setName(e.target.value)} className="form-control form-control-lg" />
                     <label className="form-label" >Name</label>
                  </div>

                  <div className="form-outline mb-4">
                   <input type="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg" />
                   <label className="form-label" >Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                     <input type="password" id="password"  value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control form-control-lg" />
                     <label className="form-label" >Password</label>
                  </div>

                  <div className="pt-1 ">
                    <button className="btn btn-dark mb-4" type="button"  onSubmit={handleSubmit} onClick={register} >Signup </button> {user ? user.email:''}
                     {user &&  <PatchCheckFill/>}
                  </div>

                  <p className="mb-4 pb-lg-2" style={{color: "#393f81"}}>Already  have an account? 
                    <Link to={'/login'}>Login here</Link> </p>
                </Form>
             </Col>
          </Row>
       </Container>
    </div>
  </>
  )
}

export default Signup