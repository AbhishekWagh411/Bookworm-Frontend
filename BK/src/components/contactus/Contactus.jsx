import "./Contactus.css";
import { Link } from "react-router-dom";

export default function Contactus() 
{
  return (
  <div className="signup">
  <div classname="header">
    <div className="text">CONTACT US</div>
    <div className="underline"></div>
  </div>
  <form className="inputs" action="" 
        id="myform" 
        onsubmit="return validate();"> 
      <div className="input">
          <input type="text" placeholder="Name" name="Name" />
        </div>
      <div className="input">
          <input type="email" placeholder="Email" name="Email" />
        </div>
      <div className="input">
          <input type="text" placeholder="Message" name="Message" />
        </div> 
      <div className="submit-container">
          <Link to="/">
            <input type="submit" value="SUBMIT" className="submit" />
          </Link>
        </div>
  </form> 
</div> 
)
}


