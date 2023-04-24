import { NavLink } from "react-router-dom";
import css from './layout.module.css'
import Logout from "../auth/Logout";
import { useAuthCtx } from "../../store/AuthProvider";





function Header() {
  const {isLoggedIn} = useAuthCtx()
  

  return (
    <header className={`${css.mainHeader} ${css.flex}`}>
      <nav className={css.headerLeft}>
        <h2 className={css.logo}>My<span>Shops</span></h2>
        <NavLink className={css.navLink} to={'/'}>Home</NavLink>
        {isLoggedIn && <NavLink className={css.navLink} to={'/Shops'}>Shops</NavLink>} 
        {isLoggedIn && <NavLink className={css.navLink} to={'/AddShop'}>Add Shop</NavLink>}
      </nav>
      <nav>
        {isLoggedIn && <NavLink to={'/login'}><Logout/></NavLink>} 
        {!isLoggedIn && <NavLink className={css.navLink} to={'/login'}>Login</NavLink>}
        {!isLoggedIn && <NavLink className={css.navLink} to={'/register'}>Register</NavLink>}
      </nav>
    </header>
  );
}

export default Header;