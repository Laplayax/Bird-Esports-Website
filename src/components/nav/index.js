import React, { Component } from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import logo from '../../images/logo.svg';
import './nav.css';

class Nav extends Component {
  state = {
    sideMenuOpen: false
  };

  menuClickHandler = () => {
    this.setState(prevState => {
      return { sideMenuOpen: !prevState.sideMenuOpen };
    });
  };

  render() {
    let menuIconClass = 'menuicon';
    let menuClasses = 'side-menu';

    if (!this.state.sideMenuOpen) {
      menuClasses = 'side-menu';
      menuIconClass = 'menuicon';
    } else {
      menuClasses = 'side-menu open';
      menuIconClass = 'menuicon open';
    }

    return (
      <nav>
        <div className="desktop">
          <div className="navigation-bar">
            <div className="nav_item_box--left  nav_item_box">
              <div className="nav_item--box nav_item--left">
                <Link
                  className={
                    window.location.href.indexOf('team') > 0
                      ? 'nav_item--link active'
                      : 'nav_item--link'
                  }
                  to="/team"
                >
                  TEAM
                </Link>
              </div>

              <div className="nav_item--box nav_item--left">
                <Link
                  className={
                    window.location.href.indexOf('articles') > 0
                      ? 'nav_item--link active'
                      : 'nav_item--link'
                  }
                  to="/articles"
                >
                  ARTICLES
                </Link>
              </div>
            </div>

            <Link href="/">
              <img src={logo} alt="TBE Logo" className="nav_item--logo" />
            </Link>

            <div className="nav_item_box--right nav_item_box">
              <div className="nav_item--box nav_item--right">
                <Link
                  className={
                    window.location.href.indexOf('about') > 0
                      ? 'nav_item--link active'
                      : 'nav_item--link'
                  }
                  to="/about"
                >
                  ABOUT
                </Link>
              </div>

              <div className="nav_item--box nav_item--right">
                <Link
                  className={
                    window.location.href.indexOf('joinus') > 0
                      ? 'nav_item--link active'
                      : 'nav_item--link'
                  }
                  to="/joinus"
                >
                  JOIN US
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile">
          <div className="mobile_header">
            <div className={menuIconClass} onClick={this.menuClickHandler}>
              <label className="menuicon-label">
                <span className="menuicon-wrap-1">
                  <span className="menuicon-top" />
                </span>

                <span className="menuicon-wrap-2">
                  <span className="menuicon-bottom" />
                </span>
              </label>
            </div>

            <div className="logo-mobile-container">
              <Link to="/">
                <img className="logo-mobile" src={logo} alt="Home" />
              </Link>
            </div>
          </div>
        </div>

        <div className={menuClasses}>
          <ul className="sideMenu-mobile-list">
            <li className="sideMenu-mobile-list-tem">
              <Link
                to="/articles"
                className="sidemenu-link"
                onClick={this.menuClickHandler}
              >
                Articles
              </Link>
              <span className="borderBottom" />
            </li>

            <li className="sideMenu-mobile-list-tem">
              <Link
                to="/team"
                className="sidemenu-link"
                onClick={this.menuClickHandler}
              >
                Team
              </Link>
              <span className="borderBottom" />
            </li>

            <li className="sideMenu-mobile-list-tem">
              <Link
                to="/about"
                className="sidemenu-link"
                onClick={this.menuClickHandler}
              >
                About
              </Link>
              <span className="borderBottom" />
            </li>

            <li className="sideMenu-mobile-list-tem">
              <Link
                to="/joinus"
                className="sidemenu-link"
                onClick={this.menuClickHandler}
              >
                Join Us
              </Link>
              <span className="borderBottom" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
