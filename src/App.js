import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {CartProvider} from 'react-use-cart'
import Cart from './Components/Cart/Cart'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup'
import Products from './Components/Products/Products';
import Checkout from './Components/Payment/Checkout'
import OrderSuccess from './Components/Payment/OrderSuccess';





function App() {
 

return (

    <div className="App">
    
    <Router>
    
     <Switch>
     <Route exact path='/' component={Home} ><CartProvider><Home/></CartProvider></Route>
      <Route exact path='/cart' component={Cart}   ><CartProvider><Cart/></CartProvider></Route>
      <Route exact path='/signup' component={Signup}><Signup/></Route>
      <Route exact path='/login'  component={Login} ><Login/></Route>
      <Route exact path='/products' component={Products} > <Products/></Route>
      <Route exact path='/checkout' component={Checkout}><Checkout/></Route>
      <Route exact path='/ordersuccess' component={OrderSuccess}><OrderSuccess/></Route>
     </Switch>
    </Router>
    
    </div>
  );
  }

export default App;
