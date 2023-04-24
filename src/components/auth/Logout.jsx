import React from 'react';
import { useAuthCtx } from '../../store/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import css from './logout.module.css'

function Logout() {
  const { isLoggedIn, logout } = useAuthCtx();

  function logoutFire() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      logout()
      
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return !isLoggedIn ? null : <button className={css.logoutBtn} onClick={logoutFire}>Logout</button>;
}

export default Logout;