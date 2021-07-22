import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext} from "react";
import Account from '@material-ui/icons/AccountCircleSharp';
const Navbar = () => {
const {logedUser, signed,setLogedUser,setSigned} = useContext(UserContext);

  return (
    <div>
    <nav className="navbar1">
      <h1>Course Point</h1>
      <div className="links">
      <Link to="/Home"
         style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}
        >Courses</Link>
        {signed &&
        <Link to="/"
         style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}
        >Dash Board</Link>}
       
        <Link to="/ContactUs"
         style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}
        >ContactUs</Link>

        {!signed &&
        <Link to="/"
         style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}
        >Sign In</Link>}
         {signed && <Account fontSize="large" >
        <Link to={"/"} onClick={() => {setSigned(false); setLogedUser("guest")}}>Sign Out</Link>
        </Account>}
        
      </div>
    </nav>
    {signed && <div className="username">Hi {logedUser.username}</div>}
   
    </div>
  );
}
 
export default Navbar;