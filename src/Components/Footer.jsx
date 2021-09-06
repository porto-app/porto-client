import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
             <Link to='/'><h1 className="main-footer-title">Porto</h1></Link>
           <p>Built by: Andy, Kim, Lawrence, Roxie, and Zak</p>
           <h4>Copyright 2021</h4>
        </div>
    );
}

export default Footer;
