
import CourseList from "./CourseList";
import useFetch from "./useFetch";

const Home = () => {
  const {dbdata:coursedb,loading,errMsg} = useFetch("http://localhost:8000/courses");
  
  return (
    <div className="home">
      {errMsg && <div> {errMsg}</div>}
      {loading && <p> loading..</p>}      
     {!loading  && <CourseList course={coursedb}/>}
    
    </div>
  );
}
 
export default Home;
