import Home from "./Home";
import './index.css';
import Navbar1 from './Navbar1'
import ContactUs from './ContactUs'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PageNotFound from './PageNotFound'
import CourseDetail from './CourseDetail'
import {BrowserRouter as Brouter, Route,Switch} from 'react-router-dom'
import {UserContext} from './UserContext'
import {useState} from 'react'

function App() {
  const [logedUser, setLogedUser] = useState("guest");
  const [signed, setSigned] = useState(false);
  return (
    <UserContext.Provider value={{logedUser,signed, setLogedUser,setSigned}}>
    <Brouter>
    <div className="App">
      <Navbar1 />
      <div className="content">
      <Switch>
           <Route exact path="/SignUp">
            <SignUp/>
            </Route>
            <Route exact path="/ContactUs">
            <ContactUs/>
            </Route>
             <Route exact path="/Home">
            <Home/>
            </Route>
            <Route exact path="/">
            <SignIn/>
            </Route>
            <Route exact path="/Courses/:id">
              <CourseDetail />
              </Route>
     
            <Route path="*">
            <PageNotFound/>
            </Route>
      </Switch>
      </div>
      </div>
    </Brouter>
    </UserContext.Provider>
  );
}

export default App;
