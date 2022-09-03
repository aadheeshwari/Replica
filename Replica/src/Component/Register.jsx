import React , {useRef} from 'react';
import { useForm } from 'react-hook-form';
import "./Register.css";
import {Link} from "react-router-dom";


function Register() {
   const { register, handleSubmit, formState: { errors }  } = useForm();
    const formref = useRef();
    const submit = submission =>{ 
      console.log(JSON.stringify(submission))
  formref.current.reset()
    }
  return (
    <>
     <div className='main'>
        <form  ref={formref} onSubmit={handleSubmit(submit)} id="for">
        <div>
                    <label>USER NAME:</label>
                </div>
                <input type="text" {...register('UserName', { required: { value: true, message: 'Enter a name'},minLength: { value: 2, message: 'Length should be greater than 2'},maxLength: { value: 15, message: 'Length should be lesser than 15'} })}/>
                {errors.UserName && (<span>{errors.UserName.message}</span>)}

<div>
                    <label>Email:</label>
                </div>
                <input type="email" {...register('email', { required: { value: true, message: 'Email is required'}, 
                pattern: { value: /^[\w-\.]+@([\w]+\.)+[\w]{2,4}$/, message: 'Enter a valid email' } })}/>
                {errors.email && (<span>{errors.email.message}</span>)}
          
           <div>
                    <label>PASSWORD:</label>
                </div>
                <input type="password" {...register('password', { required: { value: true, message: 'password is required'},minLength: { value: 8, message: 'must be minimum 8 digits'}})}/>
                {errors.password && (<span>{errors.password.message}</span>)}

          <br/>
          <br/>
          
            
           
          <br/>
            <button  type="submit">Register Now</button>
          <br/>
          Alrady have an account <Link to="/log">login</Link>
        </form>
     </div>
    </>
  );
}

export default Register;