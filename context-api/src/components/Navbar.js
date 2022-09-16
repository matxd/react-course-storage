import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>Sobre</Link>
      <Link to='/products'>Produtos</Link> 
    </nav>
  );
};

export default NavBar;