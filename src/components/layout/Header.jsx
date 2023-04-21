import { NavLink } from "react-router-dom";
import css from './layout.module.css'




function Header() {
  const isLoggedIn = false;
  return (
    <header className={`${css.mainHeader} ${css.flex}`}>
      <nav className={css.headerLeft}>
        <h2 className={css.logo}>My<span>Shops</span></h2>
        <NavLink className={css.navLink} to={'/'}>Home</NavLink>
        {isLoggedIn && <NavLink className={css.navLink} to={'/Shops'}>Shops</NavLink>} 
        {isLoggedIn && <NavLink className={css.navLink} to={'/AddShop'}>Add Shop</NavLink>}
        
      </nav>
      <nav>
        {!isLoggedIn && <NavLink className={css.navLink} to={'/login'}>Login</NavLink>}
        {!isLoggedIn && <NavLink className={css.navLink} to={'/register'}>Register</NavLink>}
      </nav>
    </header>
  );
}

export default Header;