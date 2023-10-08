import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.menu}>
        <h3 className={classes.title}>Navbar</h3>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>

      <div className={classes.menu}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
          Profile
        </NavLink>
        <button className={classes.btn}>Login</button>
      </div>
    </div>
  )
}

export default Navbar
