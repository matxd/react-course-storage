import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      {/* Navegação com Link */} 
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link> */}

      {/* Navegação com NavLink, podendo manipular links ativos */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
    </nav>
  );
};

export default Navbar;