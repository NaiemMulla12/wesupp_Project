import React from 'react';
import './Footer.css';
import Logo from './logo.png';
import meta from './meta.svg';
import linkedin from './linkedin.svg';
import instagram from './instagram.svg';

// Rename the function to avoid naming conflict
function MyFooter() {
    return (
        <footer>
            <div className="left">
                <img src={Logo} alt="" />
            </div>

            <ul className="column">
                <li><a href="#">Insight</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Investors</a></li>
            </ul>

            <ul className="column">
                <li><a href="#">Insight</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Investors</a></li>
            </ul>

            <ul className="column">
                <li><a href="#">Insight</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Investors</a></li>
            </ul>

            <ul className="column">
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Cookie policy</a></li>
                <li><a href="#">Cookie settings</a></li>
                <li><a href="#">Privacy notice</a></li>
                <li><a href="#">Security vulnerability notification</a></li>
                <li><a href="#">SpeakUp</a></li>
                <li><a href="#">Terms of use</a></li>
            </ul>

            <div className="container">
                <p>Copyright &copy; 2024 Your Company Name. All rights reserved.</p>
                <img src={linkedin} alt="" />
                <img src={meta} alt="" />
                <img src={instagram} alt="" />
            </div>
        </footer>
    );
}

export default MyFooter; // Export the renamed function
