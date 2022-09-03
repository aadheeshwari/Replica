import React , {useRef} from 'react';
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";
import { Container,Row,Col,Card,Button } from 'react-bootstrap'

function Login() {
  const { register, handleSubmit, formState: { errors }  } = useForm();
    const formref = useRef();
    const submit = submission =>{ 
      console.log(JSON.stringify(submission))
  formref.current.reset()
    }
  return (
   <>
     <div>
       <Container>
       <Row>
       <Col>
          <form  ref={formref} onSubmit={handleSubmit(submit)}>
            <h2>Welcome To WTF </h2>
           <br/> 
        <div>
                    <label>USER NAME:</label>
                </div>
                <input type="text" {...register('UserName', { required: { value: true, message: 'Enter a name'},minLength: { value: 2, message: 'Length should be greater than 2'},maxLength: { value: 15, message: 'Length should be lesser than 15'} })}/>
                {errors.UserName && (<span>{errors.UserName.message}</span>)}

           <div>
                    <label>PASSWORD:</label>
                </div>
                <input type="password" {...register('password', { required: { value: true, message: 'password is required'},minLength: { value: 8, message: 'must be minimum 8 digits'}})}/>
                {errors.password && (<span>{errors.password.message}</span>)}

          <br/>
          <br/>
          
            <button type="submit">Log in</button>
          <br/>
          <br/>
          <label>for new registration </label>
          <br/>
           <Link to="/sin" ><button >Register</button></Link>
          <br/>
        </form>
       </Col>
       <Col>
       <img className="img1" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FMRY_9dE_CbcJabsTbkHBdvJ-WsDHfnvAQ&usqp=CAU' />
       </Col>
       </Row>
       </Container>
       
     </div>
    </>
  );
}

export default Login;
