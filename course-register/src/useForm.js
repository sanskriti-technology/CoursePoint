import { useState,useEffect} from 'react';

const useForm = (validate,saveData) => {
  //const bcrypt = require('bcrypt')
  
    const [values, setValues] = useState({
      username: '',
      email: '',
      password: '',
      address: '',
      courses:[]
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    };

    const handleSubmit = e => {
        e.preventDefault();
       
        setErrors(validate(values));
        if(Object.entries(errors).length===0)
        {
          console.log("5")
        const CryptoJS = require("crypto-js");
        const cipherPassword = CryptoJS.AES.encrypt(values.password, 'ragu@key').toString();
        setValues({
          username:values.username,
          email: values.email,
          address: values.address,
          password: cipherPassword,
          courses:[]
        }) 
        //saveData();
       }
        setIsSubmitted(true)      
  }
        useEffect(() => {
         
            if (Object.keys(errors).length === 0 && isSubmitted) {
              console.log("2")
              saveData(); 
            }
          },
          [errors,isSubmitted,saveData]
        );
      
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
