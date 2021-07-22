import { Link } from "react-router-dom";

//import {Link} from "react-router-dom"
const StudentCourse = ({ user}) => {
 
  return (
    <div className="course-list">
       <h1>List of Registed Course</h1>
      
      {user.courses.map(userdata => (
       
        <div className="course-preview" key={userdata.id} >
          <Link to={"/Courses/"+userdata.id}> 
          
            <h3>Course ID : {userdata.id}</h3>
          <h2>Title: { userdata.title}</h2>
          <p>Course Duration: { userdata.duration}</p> 
          </Link>           
        </div>))}
     </div>
  );
}
 
export default StudentCourse;