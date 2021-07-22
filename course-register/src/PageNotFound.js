import {Link} from "react-router-dom"
const PageNotFound = () =>{
    return(
        <div className='PageNotFound'>
<h1>Page Not Found</h1>
<Link to="/">Back to Home</Link>
        </div>
    )
}
export default PageNotFound