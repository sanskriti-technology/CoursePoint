import { Link } from "react-router-dom";
//import {Link} from "react-router-dom"
const CourseList = (coursedb) => {
  console.log("inside courselist")
  console.log(coursedb)
  return (
    <div className="course-list">
       <h1>List of Courses</h1>
      {coursedb.course.map(coursedata => (
        <div className="course-preview" key={coursedata.id} >
          <Link to={"/Courses/"+coursedata.id}> 
          
            <h3>Course ID : {coursedata.id}</h3>
          <h2>Title: { coursedata.title}</h2>
          <p>Course Duration: { coursedata.duration}</p> 
          </Link>           
        </div>))
}
     </div>
  );
 
}
 
export default CourseList;