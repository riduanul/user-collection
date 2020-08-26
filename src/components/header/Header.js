import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            
            <h1>The Business Icon</h1>
            <nav className="nav">
                <a href="home">Home</a>
                <a href="home">Name</a>
                <a href="home">Business</a>
            </nav>
        </div>
    );
};

export default Header;