import React from 'react'
import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'

import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = ()=>setClick(false)
    const [button, setButton] = useState(true);


    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

      useEffect(() => {
        showButton();
      }, []);
    
    
    
      window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                        <Link  to="/" className="navbar-logo" onClick={closeMobileMenu} >
                            CodeGima <i className="fas fa-code"></i>
                        </Link>

                        <div className="menu-icon" onClick={handleClick}>
                           <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
                        </div>

                        <ul className={click ? 'nav-menu active' :'nav-menu'}>
                                <li className="menu-item">
                                    <Link to="/" className="nav-links" onClick={closeMobileMenu}  >
                                        Home
                                    </Link>
                                </li>

                                <li className="menu-item">
                                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}  >
                                        Prtfolio
                                    </Link>
                                </li>

                                <li className="menu-item">
                                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}  >
                                        Posts
                                    </Link>
                                </li>

                                <li className="menu-item">
                                    <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}  >
                                        Sign Up
                                    </Link>
                                </li>
                        </ul>

                        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
