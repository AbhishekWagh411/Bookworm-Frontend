
import React from "react";
import logo from '../assets/bookbg.png'
import { Link, Outlet } from "react-router-dom";

const HeaderLogin = () => {
  return (
    <>

    <header class="py-2 mb-0 ">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
      <img src={logo} alt="" width="50"  / >
        <span class="fs-4"><b>BOOKWORM</b></span>
      </a>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0">
        <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
      </form>
    </div>
  </header>
  <header class="p-3 text-bg-dark ">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-white"><Link class="text-white" style={{textDecoration: 'none'}}to="/Home" >Home</Link></a></li>
          <li><a href="#" class="nav-link px-2 text-white"><Link class="text-white" style={{textDecoration: 'none'}}to="/Products" >Products</Link></a></li>
          <li><a href="#" class="nav-link px-2 text-white"><Link class="text-white" style={{textDecoration: 'none'}} to="/Aboutus">About Us</Link></a></li>
          <li><a href="#" class="nav-link px-2 text-white"><Link class="text-white" style={{textDecoration: 'none'}} to="/Contactus">Contact Us</Link></a></li>
          
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2"><Link style={{textDecoration: 'none'}} to="/Myshelf">MyShelf</Link></button>
          <button type="button" class="btn btn-outline-light me-2"><Link  style={{textDecoration: 'none'}} to="/Cart">Cart</Link></button>
          <button type="button" class="btn btn-outline-light me-2"><Link  style={{textDecoration: 'none'}} to="/Logout">LogOut</Link></button>
        </div>
      </div>
    </div>
  </header>
  <Outlet></Outlet>
    </>
    
  );
};

export default HeaderLogin
