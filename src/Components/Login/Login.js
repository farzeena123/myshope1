import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { auth } from '../../Firebase/Config';
import {signInWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'
import Header from '../Header/Header';


function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState({})
  
  useEffect(()=>{
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email)
  }
  const login=async()=>{
    try{
   const user= await signInWithEmailAndPassword(auth,email,password);
   console.log(user)
   }catch(error){
    console.log(error.message)
    alert(error.message)
   }
  }
  const logout=async()=>{
    await signOut(auth)
  }

  return (
    <>
    <Header/>
    <div className='login'>
        <Container className='my-5'>
          <Row className='g-0'>
            <Col className='md-6'>
              <Image style={{padding:'5px',width:'500px'}} src='https://i.pinimg.com/564x/63/8d/98/638d984f0f5bd2b331cc17c91471784c.jpg'></Image>
            </Col>
            <Col className='md-6'>
              <Form>
                <div className="d-flex align-items-center mb-3 pb-1">
                  <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                  <span className="h1 fw-bold mb-0">Login</span>
                </div>

                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>
                 
              

               <div className="form-outline mb-4">
                 <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg" />
                   <label className="form-label" >Email address</label>
                </div>

              <div className="form-outline mb-4">
                 <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control form-control-lg" />
                   <label className="form-label">Password</label>
              </div>

              <div className="pt-1 mb-4">
                 <button className="btn btn-dark btn-lg btn-block" type="button" onSubmit={handleSubmit} onClick={login} >Login</button>
              </div>
               <h6>User Logged In:{user ? user.email : "Not Logged In"}  <button onClick={logout} className='btn btn-light'>Logout</button> </h6>
              <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account?
             <Link to='/signup'> Register here</Link></p>
                      </Form>
                  </Col>
              </Row>
          </Container>
      </div>
    </>
  )
}

export default Login