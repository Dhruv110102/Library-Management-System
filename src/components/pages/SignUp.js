//*import React from 'react';
//*import '../../App.css';

//*export default function SignUp() {
   //* return <h1 className='sign-up'>SIGN UP/SIGN IN</h1>
//*}
import React, { useState } from 'react';
import './SignUp.css';
import FormSignup from './FormSignUp';
import FormSuccess from './FormSucess';



const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          {/* <img className='form-img' src='Background.jpeg' alt='kids edu'/> */}
          <center><h1>Sign Up</h1></center>
          
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;