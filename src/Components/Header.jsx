import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
            <Link to='/'><h1 className="main-header-title">PORTO</h1></Link>
            <h4>The portfolio-based app</h4>
        </div>
    );
}

export default Header;
