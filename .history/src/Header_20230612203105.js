import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

            <div className="header__search">
                <input
                    className='header_searchInput' type="text" />
                {/* Logo */}
            </div>

            <div className="header__nav">
                <div className='header__option'>
                    <span className='header__optionLine'></span>
                </div>

                <div className='header__option'>

                </div>

                <div className='header__option'>

                </div>
            </div>
        </div>
    )
}

export default Header