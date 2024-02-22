import React from "react";
import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

export const Login = () => {
  const [loginDetails, setLogInDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this line
  let navigate = useNavigate();
  const handleChange = (event) => {
    setLogInDetails((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let details = JSON.stringify(loginDetails);
    //document.write("Hello World");
    fetch("http://localhost:8080/api/Login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: details,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        if (result) {
          sessionStorage.setItem("isLoggedIn", true);
          setIsLoggedIn(true);
          alert("Login Success!!");
          navigate("/");
        } else {
          alert("Login Failed!!");
          
        }
        
      });
      
  };

  return (
    <div className="signup" style={{ display: "flex", justifyContent: "center" , marginBottom: "40px"}}>
      <div classname="header">
        <div className="text">LOGIN</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="forgot-password">
          Forgot Password?<span>Click Here!</span>
        </div>
        <div className="submit-container">
          <input type="submit" value="LogIn" className="submit" />
          
            <Link to="/Signup"><input type="submit" value="SignUp" className="submit" /></Link>
          
        </div>
      </form>
    </div>
  );
};
