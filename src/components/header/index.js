import React from 'react';
import './header.css';

function Header() {
    
        return (
            <header className="header-overlay">
                <div className="header-link">
                    <div className="header-title">
                      <h1 className="header-title_name">Homepage</h1>
                    </div>
                    <nav className="header-nav">
                        <a>Home</a>
                        <a>About</a>
                        <a>Contact</a>
                    </nav>
                </div>
                <div className="header-user"></div>
            </header>
        );
    
    
}

export default Header;