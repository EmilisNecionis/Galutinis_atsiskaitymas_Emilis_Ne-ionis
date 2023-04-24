import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Container from '../components/ui/container/Container'
import Title from '../components/ui/pageTitle/Title';
import Slogan from '../components/ui/slogan/slogan';

function LoginPage() {
  const navigate = useNavigate();
  const { ui, setIsLoading} = useAuthCtx()
  //
  function loginUser({email, password}) {
    ui.showLoading();
    setIsLoading(true);
    console.log('{email, password} ===', {email, password});
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('Login success');
        setIsLoading(false);
        ui.showSuccess()
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('Login failed', errorMessage);
        ui.showError('Wrong email or password');
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <Title>Login</Title>
      <Slogan/>
      <LoginForm onLogin={loginUser} />
    </Container>
  );
}

export default LoginPage;
