import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
             <Link to='/'><h1 className="main-footer-title">Porto</h1></Link>
           <p className="footer-names">Andy Zhong, Kim Kruedelbach, Lawrence Hau, Roxie Schnoor, and Zak Rehbein</p>
           <h4>&copy; 2021</h4>
        </div>
    );
}

export default Footer;
