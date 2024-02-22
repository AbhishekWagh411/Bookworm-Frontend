import React from 'react'
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate=useNavigate();
    if(sessionStorage.getItem('isLoggedIn')==true){
    const isLoggedIn=sessionStorage.getItem('isLoggedIn');
    isLoggedIn=false;
    sessionStorage.clear();
       
        navigate('/');
    }
  return (
    <div>
      
    </div>
  )
}

export default Logout
