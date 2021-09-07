import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../PortoLogo.png';

function Header(props) {
    return (
        <div className="header">
            <Link to='/'><img src={logo} className="logo-badge" alt="logo"/></Link>
            {/* <h4>Swipe Your Way to Your Next Great Hire!</h4> */}
        </div>
    );
}

export default Header;
