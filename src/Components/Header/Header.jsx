
import './Header.css';
import Logo from './logo.png';
import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import menu from './menu.svg'


function Header() {
    const [showMediaIconsNav, setShowMediaIconsNav] = useState(false);

    return (
        <div className="navbar" id="navbar">
            <div className="logo">
                <img src={Logo} alt="" />

            </div>

            <ul>
                <li className="dropdown">
                    <Link to="/">Landing Page</Link>
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
                    <Link to="DiscoverWesupp">Discover Wesupp</Link>
                </li>

                <li className="dropdown">
                    <Link to="UnderConstructionPage">Work we offer</Link>

                </li>

                <li className="dropdown">
                    <Link to="UnderConstructionPage">Insight</Link>

                </li>

                <li className="dropdown">
                    <Link to="UnderConstructionPage">Clients</Link>

                </li>
                <li className="dropdown">
                    <Link to="UnderConstructionPage">Hiring</Link>

                </li>
                <li className="dropdown">
                    <Link to="UnderConstructionPage">Get in Touch</Link>

                </li>
            </ul>

            <ul className="ulist">
                <li>
                    <Link to="UnderConstructionPage">Investors</Link>
                    
                </li>
                <li>
                <Link to="UnderConstructionPage">Contact Us</Link>
                    
                </li>
                <li>
                <Link to="UnderConstructionPage"> Discover</Link>
                    
                </li>
            </ul>

            {/* hamburget menu start  */}
            <div className="Navhamburger-menu">
                <a href="#" onClick={() => setShowMediaIconsNav(!showMediaIconsNav)}>
                <GiHamburgerMenu />
                </a>
            </div>
        </div>

    )
}

export default Header