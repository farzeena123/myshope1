import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Whatsapp,Instagram, Google, Phone, Gem, Envelope, Shop} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';


function Footer() {
  return (
  <>
    <footer className="text-center text-lg-start  text-dark slide-up"  style={{backgroundColor:'rgb(234, 234, 207)'}} >
    
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Whatsapp className='m-2'   />
          <Instagram className='m-2'   />
          <Google className='m-2'  />
        </div>
      
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          
          <div className="row mt-3">
      
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                 <Gem/> MY SHOPE
              </h6>
              <p>
               Buy less.<br/>
               Choose well.<br/>
               Make it last.<br/>
              </p>
            </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p id='ladies'  className="text-reset"><Link style={{textDecoration:'none',color:'black'}} to='/products'>Ladies Wear</Link></p>
                <p id='kids' className="text-reset">Kids Wear</p>
            </div>
          
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p> <Shop/>USA </p>
              <p>
                <Envelope/>
                myshope@gmail.com
              </p>
              <p><Phone/> + 01 234 567 88</p>
            </div>
         </div>
       </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        © 2022 Copyright:
        <p id='gmail' className="text-reset fw-bold" >myshope.com</p>
      </div>
    </footer>
  </>
    
  )
}

export default Footer