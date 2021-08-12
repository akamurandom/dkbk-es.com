import React from 'react'

import logo from '../images/logo.png'

const Nav = () => {
  return <>
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
          <img
            className="px-4 py-3"
            src={logo}
            alt="凸凹ES"
            width={180}
          />
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navMenu" className="navbar-menu">
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
