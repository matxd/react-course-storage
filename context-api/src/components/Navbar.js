import './Navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/profile'>Profile</Link> 
    </nav>
  );
};

export default NavBar;