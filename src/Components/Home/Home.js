import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image} from 'react-bootstrap'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import data from '../../Data'
import kidsData from '../Products/KidsData';
import ItemCardKids from '../Products/ItemCardKids';
import ItemCardHome from './ItemCardHome';


function Home() {
 return (
    <>
    <Header/>
    <hr />
      <Container>
        <Row>
          <Col >
         <div className='font'>
      <h3>DISCOVER YOUR STYLE!</h3>
      <p className='p'>"Fashion is the part of the daily air and it changes all the time, with all events.  You can see and feel everything in clothes."
       —Diana Vreeland</p></div>
        <img style={{width:'500px',size:'cover'}} src="https://i.pinimg.com/564x/43/5a/66/435a66e4e7808e497e7af34403dac82c.jpg" alt="" />
         </Col>
         
         <Col>
         <img style={{width:'500px',size:'cover',paddingTop:'50px'}}  src="https://i.pinimg.com/564x/f5/69/50/f56950333f1ad1cff12233f8f3110215.jpg" alt="" />
         <div className='font2'>
         <h2>BE STYLE ,BE AMAZING!</h2>
               <p>"Fashion is not necessarily about labels. It's not about brands. It's about something else that comes from within you."
                —Ralph Lauren</p></div>
         </Col>
        </Row>
   </Container>
  <hr />
   <br />
      <Row>
          <h3 className='d-flex justify-content-center'>LADIES COLLECTIONS</h3>
           <hr />
          <br />
        <div className='posters'>
        {data.productData.map((items,index)=>{
      return(
        <div className='posterdiv'>
          <ItemCardHome
          img={items.img}
          key={index}
          />
        </div>
      )
    })}
        </div>
      </Row>
     <br /><hr /><br />
    
    <Container fluid className='kids'>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col >
        <h2 className='soon'>COMING SOON</h2><hr />
        <p className='colp' >KIDS WEAR COLLECTIONS</p>
        </Col>
         <Image  style={{width:'550px',height:'550px'}} src='https://i.pinimg.com/564x/be/86/ab/be86ab8de1d126f20d943a253cd894f5.jpg'></Image>
    
      </Row>
    </Container>
    <br />
    <hr />
    <Row>
    <h3 className='d-flex justify-content-center'>KIDS COLLECTIONS</h3>
    <hr />
    <div className='posters'>
    {kidsData.productKidsData.map((items,index)=>{
      return(
        <div className='posterdiv'>
          <ItemCardKids
          img={items.img}
          key={index}
          />
        </div>
      )
    })}
   </div>
   </Row>
    <hr />
   <br />
  <Footer/>
   
    </>
  )
}

export default Home