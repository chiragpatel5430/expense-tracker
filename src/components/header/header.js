import React from 'react'
import './header.css'

function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-logo">
                    Xpensr <i class="fi-rr-credit-card" />
                </div>    
                <div className="header-button">
                    <a
                        href="https://github.com/chiragpatel5430"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="devicon-github-original colored" />
                        Star
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Header
