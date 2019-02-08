import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
            <h2 className="logo">Dopos</h2>
            <nav className="navigation">
                <h4><Link to="/" className="link">Home</Link></h4>
                <h4><Link to="/products" className="link">Products</Link></h4>
                <h4><Link to="/awards" className="link">Awards</Link></h4>
                <h4><Link to="/contact" className="link">Contact us</Link></h4>
            </nav>
            <h4 className="login">Log in 
                <Link to="/login"><i className="fas fa-user-circle fa-2x"></i></Link>
            </h4>
        </div>
    )
}
export default Header