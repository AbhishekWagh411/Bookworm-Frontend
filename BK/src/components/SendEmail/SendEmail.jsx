import React, { useState } from 'react';
import './Sendemail.css';

const SendEmail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    
    message: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="wrapper"> 
      <h2>Contact us</h2> 
      <div id="error_message"> 

      </div> 
      <form onSubmit={handleSubmit} id="myform"> 
        <div className="input_field"> 
          <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/> 
        </div> 
       
        <div className="input_field"> 
          <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/> 
        </div> 
        
        <div className="input_field"> 
          <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange}/> 
        </div> 
        <div className="btn"> 
          <button type="submit">Submit</button> 
        </div> 
      </form> 
    </div> 
  );
};

export default SendEmail;
