import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
const Navbar = () => {
    return (
       <>
       <nav className='navber'>
        <div className='logo'><h1>My city</h1></div>
        <ul className='menu'>
          <li><Link to="/">Hoome</Link></li>
          <li><Link to="/Ho2me">Ho2me</Link></li>
          <li><Link to="">Ho3me</Link></li>
          <li><Link to="">Ho4m</Link></li>
          <li><Link to="">Ho5me</Link></li>
        </ul>
       </nav>
       </>
    );
}

export default Navbar;
