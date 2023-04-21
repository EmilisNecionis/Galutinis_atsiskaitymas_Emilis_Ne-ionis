import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';

function RegisterPage() {
  function registerFireBase({email, password}) {
    console.log('{email, password} ===', {email, password});
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('user ===', user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.warn('errorMessage ===', errorMessage);
      // ..
    });
  }
  return (
    <div>
      <h1>Register Page</h1>
      <p>Welocme to RegisterPage</p>
      <RegisterForm onRegister={registerFireBase}/>
    </div>
  )
}

export default RegisterPage