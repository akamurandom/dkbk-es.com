import React, { useState, useCallback } from 'react'

import logo from '../images/logo.png'

const Nav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const onBurgerClicked = useCallback(() => {
    setIsMenuActive(!isMenuActive);
  }, [isMenuActive]);

  return <>
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
          <img
            className="px-4 py-3"
            src={logo}
            alt="凸凹ES"
            width={180}
          />
        <a
          className={`navbar-burger ${isMenuActive ? 'is-active' : ''}`}
          onClick={onBurgerClicked}
          role="button" aria-label="menu" aria-expanded="false" data-target="nav-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="nav-menu" className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>
          <a className="navbar-item">
            WORKS
          </a>
          <a className="navbar-item">
            SHEETS
          </a>
          <a className="navbar-item">
            LINKS
          </a>
        </div>
      </div>
    </nav>
  </>
}

export default Nav
