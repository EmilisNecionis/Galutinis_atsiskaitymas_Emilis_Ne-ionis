import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function LoginPage() {
  function loginUser({email, password}) {
    console.log('{email, password} ===', {email, password});
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('Login success');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('Login failed', errorMessage);
      });
  }

  return (
    <div className='container tac'>
      <h1>Login Page</h1>
      <p>Welocme to LoginPage</p>
      <LoginForm onLogin={loginUser} />
    </div>
  );
}

export default LoginPage;
