import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { UserContext } from "./UserContext";
import { useContext, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EnrolIcon from '@material-ui/icons/AddCircleOutline';

const CourseDetails = () => {
  const [enrolled,setEnrolled]=useState(false)
  const [disp,setDisp]=useState(true)
  const {logedUser,signed,setLogedUser} = useContext(UserContext);
const hist= useHistory();
  const { id } = useParams();
  const {dbdata:courseDetail,loading,errMsg} = useFetch("http://localhost:8000/courses/"+ id);
 
  if(signed && disp){
  const found = logedUser.courses.find(course=> course.id === id)
    if (found != null) {
      setDisp(false)
      setEnrolled(true)
  }}
  const handleClickDelete = (e) => {
    e.preventDefault(); 
    const courseDelete = logedUser.courses.filter((course)=>course.id!==id);
    updateCourses(courseDelete)
   // window.alert("Deleted Succsessfully")
    setEnrolled(false)
    console.log("enrolled set false")
    setDisp(true)
   // hist.replac
    
  }
   const handleClickEnrol = (e) => {
    e.preventDefault(); 
    if(logedUser!=="guest"){
     const courseUpdate = logedUser.courses.concat(courseDetail);
     updateCourses(courseUpdate)  
     setEnrolled(true)
     console.log("enrolled set true")
     setDisp(false)
    }
    else{
      hist.push("/")
    }
   }
    const updateCourses=(courseObject)=>{   
      fetch('http://localhost:8000/student/'+logedUser.id, {  
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"courses":courseObject})
    }).then((res) => {
       return res.json();
    })
    .then(data=>{
      setLogedUser(data); 
   })
}
   return (
    <div className="course-details">
    { loading&& <div>Loading...</div> }
    { errMsg && <div>{ errMsg}</div> }
    { courseDetail && <div>
      {enrolled && <DeleteIcon style={{ display: "block", padding: 30, float: "right"}} onClick={handleClickDelete}> Delete</DeleteIcon>}
     { disp && <p>Enroll <EnrolIcon onClick={handleClickEnrol}>Enrol</EnrolIcon></p>}
     { enrolled &&<span> <h4>Enrolled</h4> </span> }
      <article>
        <h2>{ courseDetail.title }</h2>
        <h3>Course ID : {courseDetail.id}</h3>
        <p>Course Duration: { courseDetail.duration}</p> 
        <div>{ courseDetail.body }</div>
      </article>
      </div>
    }
  </div>
);
} 
 
export default CourseDetails;