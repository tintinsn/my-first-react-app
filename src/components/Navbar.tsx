import classes from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h3 className={classes.title}>Navbar</h3>
      <button className={classes.btn}>Login</button>
    </div>
  )
}

export default Navbar
