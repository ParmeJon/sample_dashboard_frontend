import React from 'react';
import Nav from './Nav'
import "../styles/header.css";

const Header = (props) => {
    return (
        <header className="main-header">
          <h1>DASH<span className="title-board">board</span></h1>
          <Nav />
        </header>
      );
}

export default Header;
