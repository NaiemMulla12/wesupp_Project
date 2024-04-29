import React from 'react'
import './Header.css';
import Logo from './logo.png';
import {useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


function Header() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <div className="navbar" id="navbar">
            <div className="logo">
                <img src={Logo} alt="" />

            </div>

            <ul>
                <li className="dropdown">
                    <a href="#">Landing Page</a>
                    <div className="dropdown-content">
                        <div className="left">
                            <h1>Services</h1>
                            <p>Discover our portfolio – constantly evolving to keep pace with the ever-changing needs of our clients.
                            </p>

                            <button id='button'>Explore More</button>


                        </div>

                        <div className="right">
                            <div className="first">
                                <a href="#">Softwere Development</a>
                                <a href="#">Website Development</a>
                                <a href="#">Mobile Application Development</a>
                                <a href="#">WordPress</a>
                            </div>
                            <div className="second">
                                <a href="#">Digital Marketing</a>
                                <a href="#">UI / UX</a>
                                <a href="#">Content Writing</a>
                            </div>

                        </div>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#">Discover Wesupp</a>
                </li>

                <li className="dropdown">
                    <a href="#">Work we offer</a>

                </li>

                <li className="dropdown">
                    <a href="#">Insight</a>

                </li>

                <li className="dropdown">
                    <a href="#">Clients</a>

                </li>
                <li className="dropdown">
                    <a href="#">Hiring</a>

                </li>
                <li className="dropdown">
                    <a href="#">Get in Touch</a>

                </li>
            </ul>

            <ul className="ulist">
                <li>
                    Investors
                </li>
                <li>
                    Contact Us
                </li>
                <li>
                    Discover
                </li>
            </ul>

            {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
            </a>
          </div>
        </div>

    )
}

export default Header