
import React, { useState } from "react";
import { BrowserRouter as Router,
  Routes,
  Route
  
  } from "react-router-dom"
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

  // importing screens...
import Landingpage from '../screens/Landingpage/Landingpage';
import Sales from '../screens/Sales/Sales';
import Summer from '../screens/Summer/Summer';
import Winter from '../screens/Winter/Winter';
import Accessories from '../screens/Accessories/Accessories';
import About from '../screens/About/About';
import Cart from '../screens/Cart/Cart';
import Wishlist from '../screens/Wishlist/Wishlist';
import Login from '../screens/Login/Login';
import Profile from '../screens/Profile/Profile';
import ProductView from '../screens/Product-view/Productview';


function App() {
  const [loginState, setLoginState] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setLoginState(true)
      // ...
    } 
    else{
        setLoginState(false)
    }
  });
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='*' element={<Landingpage/>} />
          <Route path='/landingpage' element={<Landingpage/>} />
          <Route path='/sales' element={<Sales/>} />
          <Route path='/winter' element={<Winter/>} />
          <Route path='/accessories' element={<Accessories/>} />
          <Route path='/summer' element={<Summer/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/productView' element={<ProductView/>} />


        </Routes>
      </Router> */}
      <Router>
    {
    loginState ?
    //Online Handler
    
   
  
        <Routes>
        <Route path='*' element={<Landingpage/>} />
          <Route path='/landingpage' element={<Landingpage/>} />
          <Route path='/sales' element={<Sales/>} />
          <Route path='/winter' element={<Winter/>} />
          <Route path='/accessories' element={<Accessories/>} />
          <Route path='/summer' element={<Summer/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/productView' element={<ProductView/>} />
        </Routes>
   
  
    :
    //Offline Handler
    <Routes>
            <Route exact path="*" element={<Login/>}/>
            {/* <Route exact path="/Signup" element={<Signup/>}/> */}
            <Route exact path="/Login" element={<Login/>}/>
        </Routes>
    }
</Router>
    </>
  );
}

export default App;
