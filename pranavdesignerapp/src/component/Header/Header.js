import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends React.Component {
    render() {
      return (
        <header>
          <div className="container">
            <div className="headerWrapper">
              <div className="logoWrapper">
                <h1 className="headerText">PRANAV</h1>
              </div>
              {/* <div className="navWrapper">
                <nav className="navbar">
                  <ul className="mainNavbar">
                    <li className="mainNavbarItem">Portfolio</li>
                    <li className="mainNavbarItem">Process</li>
                    <li className="mainNavbarItem">About</li>
                    <li className="mainNavbarItem">Contact Us</li>
                  </ul>
                </nav>
                <div className="hamburgerWrapper">
                  <FontAwesomeIcon icon={['fa', 'bars']}/>
                </div>
              </div> */}

              
            </div>
          </div>
        </header>
      );
    }
  }

export default Header;
