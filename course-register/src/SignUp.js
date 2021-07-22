
import useForm from './useForm'
import validate from './validateInfo'
//import { useHistory} from "react-router-dom";
import { useState } from 'react';
const SignUp = () => {
  //const hist=useHistory()
   const [success,setSuccess]=useState(false)
   const [usn,setUsn]=useState(null)

   
  const saveData=()=>{
    if(Object.keys(errors).length === 0 && !success)
    {
    fetch('http://localhost:8000/student/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    }).then((res) => {
      return res.json();
    })
    .then(data=>{
      setSuccess(true)
      setUsn(data.id)
    })
  }}
  
  const { handleChange, handleSubmit, values, errors } = useForm(validate,saveData);
// useCallback(() => { saveData(values)}, [values]);
  return (
    
    <div className='signup'>
       {!success &&
    <form onSubmit={handleSubmit} className='form'>
      <h3>
        Create your account by filling out the
        information below.
      </h3>
      <div className='form-inputs'>
        <label className='form-label'>Name</label>
        {errors.username && <p>{errors.username}</p>}
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Enter your username'
          value={values.username}
          onChange={handleChange}
        />
        
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Email</label>
        {errors.email && <p>{errors.email}</p>}
        <input
          className='form-input'
          type='email'
          name='email'
          placeholder='Enter your email'
          value={values.email}
          onChange={handleChange}
        />
        
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Password</label>
        {errors.password && <p>{errors.password}</p>}
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Enter your password'
          value={values.password}
          onChange={handleChange}
        />
        
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Address</label>
        {errors.address && <p>{errors.address}</p>}    
        <textarea
          className='form-input'
          type='text'
          name='address'
          placeholder='Type Address Here'
          value={values.address}
          onChange={handleChange}
        />
          
     </div>
      <button className='form-input-btn' type='submit'>
        Sign Up
      </button>

      <div className='form-input-login'>
        Already have an account? Login <a href='/'>here</a>
      </div>
    </form>
    }
    {success && 
    <div> 
    <h2> Registered Succsessfully</h2> 
    <h2> Please Note Down Your University Seat Number (USN) to Login</h2> 
    <h3> USN : react@{usn}</h3> 

    </div>}
  </div>



);
};
 
export default SignUp;