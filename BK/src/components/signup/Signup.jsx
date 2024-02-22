import React from 'react';
import './Signup.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
export const Signup = () => {

  const [signupDetails, setSignUpDetails] = useState({
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    email: "",
    password: "",
    phoneno:"",
    confirmPassword:""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const details = JSON.stringify(signupDetails);
    
    if (signupDetails.password === signupDetails.confirmPassword) {
    fetch("http://localhost:8080/api/SignUp", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: details,
    }).then((data) => {
        console.log(data);
        console.log("Signup successful!");
        alert("Signup Success!!");
        
        
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("Signup failed!");
        alert("Signup Failed!!");
      });
      
    }
    else{
        alert('Passwords do not match');
    }
    navigate("Login");
  };
  
  return (
    <div className="signup" style={{ display: "flex", justifyContent: "center" , marginBottom: "40px"}}>
      <form onSubmit={handleSubmit}>
        <div className="header1">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text" placeholder="First Name" name="first_name" onChange={handleChange} required/>
          </div>

          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text" placeholder="Last Name" name="last_name" onChange={handleChange} required
            />
          </div>

          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text" placeholder="Country" name="country" onChange={handleChange} required
            ></input>
          </div>

          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text" placeholder="City" name="city" onChange={handleChange} required
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email" placeholder="Email Id" name="email" onChange={handleChange} required
            />
          </div>
          
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name="phone" onChange={handleChange} placeholder="Phone Number" required />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password" placeholder="Password" name="password" onChange={handleChange} required
            />
          </div>
        
          <div className="input">
            <img scr={password_icon} alt=""/>
            <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm Password"required/>

          </div>
          </div>

        <div className="submit-container">
          <button type="submit" className="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
