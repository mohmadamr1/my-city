import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
       <>
       <nav className='navber'>
        <div className='logo'><h1>My city</h1></div>
        <ul className='menu'>
          <li><Link href="/Hoome">Hoome</Link></li>
          <li><Link href="Ho2me">Ho2me</Link></li>
          <li><Link href="#">Ho3me</Link></li>
          <li><Link href="#">Ho4m</Link></li>
          <li><Link href="#">Ho5me</Link></li>
        </ul>
       </nav>
       </>
    );
}

export default Navbar;
