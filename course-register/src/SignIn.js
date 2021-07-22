import { useState ,useContext} from "react";
import { Link} from "react-router-dom";
import StudentCourse from "./StudentCourse";
import useFetch from "./useFetch";
import { UserContext } from "./UserContext";
//import { useHistory} from "react-router-dom";

const SignIn = () => {
  const {logedUser,signed,setLogedUser,setSigned} = useContext(UserContext);
  
  const {dbdata:students,loading,errMsg} = useFetch("http://localhost:8000/student");
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginErr,setLoginErr]=useState("")

   const student= { username,password};
   const CryptoJS = require("crypto-js");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = students.find(students => ("react@"+students.id)=== student.username)
    if (user == null) {
      console.log('Cannot find user')
      setLoginErr("User is not registered")
    }
    else{
    try {
      
      const bytes = CryptoJS.AES.decrypt(user.password, 'ragu@key');
      const decryptedpass = bytes.toString(CryptoJS.enc.Utf8);
      console.log(decryptedpass)
      if(student.password===decryptedpass) {
        console.log('Success')
        setLogedUser(user)
        setSigned(true)
      
      } else {
        console.log('Not Allowed')
        setLoginErr("Password Invalid")
      }
    } catch {
      setLoginErr("UserID or Password Invalid")
    } 
  }
  }
    
   return ( 
    <div className="studentHome">
      
    {!signed &&
    <div className="signin">
      <h2>Login Page</h2>
      {loginErr && <h4>{loginErr}</h4>}
      <form onSubmit={handleSubmit}>
      <p>
        <label>UserID:  </label>
        <input 
          type="text" 
          required 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </p>
        <p><label>Password:  </label>
        <input
        type="password" 
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}>
          </input>
          </p> 
          <button >Login</button> 
        
      </form>
      <p> Click here to <Link to="/SignUp" >Sign Up</Link></p>
      </div>}
      
      { errMsg && <div>{ errMsg }</div> }
      { loading && <div></div>  }
      {signed && <StudentCourse user={logedUser} /> } 
    </div>
  );
}
export default SignIn;