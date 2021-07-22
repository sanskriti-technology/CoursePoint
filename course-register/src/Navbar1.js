import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext,useState} from "react";
import Account from '@material-ui/icons/AccountCircleSharp';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';

//import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
const {logedUser, signed,setLogedUser,setSigned} = useContext(UserContext);
const [open, setOpen] = useState(false);
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
         {signed && 
           <Account  fontSize="large" onClick={() => setOpen(!open)}></Account>}
           {/* {open && <DropdownMenu></DropdownMenu>} */}
        {open && 
        <div className="dropdown">
        <div className="menu">
        <div className="menu-item">Hi {logedUser.username}</div>
          {/* <div className="menu-item">
          <span className="icon-button">{<ArrowIcon/>}</span>
      My Profile 
        <span className="icon-right">{<ArrowIcon/>}</span></div> */}
        <div className="menu-item">
          <span className="icon-button">{<ArrowIcon/>}</span>
       <Link to={"/"} onClick={() => {setSigned(false); setLogedUser("guest");setOpen(!open)}}>Sign Out</Link></div>
       </div>
        </div>}
      
        
      </div>  
    </nav>
    {/* {signed && <div className="username">Hi {logedUser.username}</div>} */}
   
    </div>
  );
}
 
export default Navbar;