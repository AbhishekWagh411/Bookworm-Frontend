import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './components/Home/Home';
import Products from './components/product/Products';
import LendingLibrary from './components/lendinglibrary/LendingLibrary';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Aboutus from './components/aboutus/Aboutus';
import Contactus from './components/contactus/Contactus';
import { Signup } from './components/signup/Signup';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/login/Login';
import Pagenotfound from './components/pagenotfound/Pagenotfound';
import Invoice from './components/invoice/Invoice';
import Homelogin from './components/Home/Homelogin';
import Logout from './components/login/Logout';
import Cart from './components/cart/Cart';
import MyShelf from './components/myshelf/MyShelf';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <Header/> */}
  <Routes>
    <Route path="/" element = {<App />}>
      {/* <Route path="Login/Homelogin" element = {<Homelogin />}/> */}
      <Route path="/" element = {<Home />}/>
      <Route path="Home" element = {<Home />}/>
      <Route path="Products" element = {<Products />}/>
      <Route path="LendingLibrary" element = {<LendingLibrary />}/>
      <Route path="Aboutus" element = {<Aboutus />}/>
      <Route path="Contactus" element = {<Contactus />}/>
      <Route path="Signup" element = {<Signup />}/>
      <Route path="Login" element = {<Login />}/>
      <Route path="Signup/Login" element = {<Login />}/>
      <Route path="/Logout" element = {<Logout />}/>
      <Route path="Cart" element={<Cart/>}/>
      <Route path="MyShelf" element={<MyShelf/>}/>
      <Route path="Invoice" element = {<Invoice />}/>
      <Route path="*" element = {<Pagenotfound />}/>
    </Route>
    <Route path="Login/Homelogin" element = {<Homelogin />}/>
    <Route path="Home" element = {<Home />}/>


  </Routes>
  {/* <Footer/> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
