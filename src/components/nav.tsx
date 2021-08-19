import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.png'

const Nav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const onBurgerClicked = useCallback(() => {
    setIsMenuActive(!isMenuActive);
  }, [isMenuActive]);

  return <>
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
          <Link className="px-3 pt-2" to="/">
            <img
              src={logo}
              alt="凸凹ES"
              width={180}
            />
          </Link>
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
          <Link className="navbar-item" to="/">
            HOME
          </Link>
          <Link className="navbar-item" to="/works">
            WORKS
          </Link>
          <Link className="navbar-item" to="/sheets">
            SHEETS
          </Link>
        </div>
      </div>
    </nav>
  </>
}

export default Nav
