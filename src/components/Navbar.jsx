import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {Button} from './Botton';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handlClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)
  const showButton = () => {
    if(window.innerWidth <= 960) {
    setButton(false)
    }else{
      setButton(true)
    }
  };

  window.addEventListener('resize',showButton);


    return (
       <>
       <nav className='navber'>
        <div className='navber-container'>
          <Link to="/" className='navber-logo'>My city</Link>
          <div className='menu-icon' onClick={handlClick}>
            <i className={click? 'fas fa-times' : 'fas fa-bars'} />
            <ul className={click ?'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sing-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sing up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SING UP</Button>}
          </div>
        </div>
       </nav>
       </>
    );
}

export default Navbar;
