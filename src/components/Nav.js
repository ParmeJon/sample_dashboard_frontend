import React from 'react';
import { Link } from 'react-router-dom'
import homeIcon from '../images/home.svg'
import pieChart from '../images/pie-chart.svg'
import '../styles/nav.css'

const Navbar = () => {
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/">
              <div className="link-container">
                <img className="home-icon" src={homeIcon} alt="Home Icon" />
                Home
              </div>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/analytics">
              <div className="link-container">
                <img className="home-icon" src={pieChart} alt="Pie Chart Icon"/>
                Analytics 
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar