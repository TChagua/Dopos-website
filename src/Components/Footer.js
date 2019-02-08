import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer">
            <div className="copy">
                <p>&copy; 1996-2018 Dopos.</p>
                <p>All rights reserved.</p>
            </div>
            <div className="email-gen">
                <p>General inquiries:</p>
                <p>hello@dopos.studio</p>
            </div>
            <div className="email-press">
                <p>Press inquiries:</p>
                <p>press@dopos.studio</p>
            </div>
            <div className="links">
                <Link to="/policy" className="link2">Privacy Policy</Link>
                <Link to="/terms" className="link2">Terms of Use</Link>
            </div>
        </div>
    )
}
export default Footer