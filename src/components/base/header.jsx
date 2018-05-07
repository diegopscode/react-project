import React from 'react'

import Logo from '@images/react_logo.svg'

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <h1>React Project</h1>
        </div>
    </header>
)

export default Header