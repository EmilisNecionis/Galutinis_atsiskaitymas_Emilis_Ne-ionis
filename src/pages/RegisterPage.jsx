import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Container from '../components/ui/container/Container'
import Title from '../components/ui/pageTitle/Title';
import Slogan from '../components/ui/slogan/slogan';

function RegisterPage() {
  const navigate = useNavigate();
  const { ui, setIsLoading} = useAuthCtx()  
  //
  function registerFireBase({email, password}) {
    setIsLoading(true);
    ui.showLoading();
    console.log('{email, password} ===', {email, password});
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('user ===', user);
      // ...
      console.log('Registration success');
      setIsLoading(false);
      ui.showSuccess('Registration success')
      navigate('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.warn('Registration failed ===', errorMessage);
      ui.showError('Registration failure');
      setIsLoading(false);
      // ..
    });
  }
  return (
    <Container>
      <Title>Registration</Title>
      <Slogan/>
      <RegisterForm onRegister={registerFireBase}/>
    </Container>
  )
}

export default RegisterPage