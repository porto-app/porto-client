import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
            <Link to='/'><h1 className="main-header-title">Porto</h1></Link>
            <h4>Swipe Your Way to Your Next Great Hire!</h4>
        </div>
    );
}

export default Header;
