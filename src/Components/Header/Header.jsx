import React, { useState } from "react";
import Burger from "../../Ui/Burger";
import CloseIcon from "../../Ui/CloseIcon";
import PhoneIcon from "../../Ui/PhoneIcon";
import MailIcon from "../../Ui/MailIcon";
import { Link, NavLink, useMatch } from "react-router-dom";

function Header() {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const path = useMatch("/");
  // console.log(path);

  return (
    <header className="page-header">
      <div className="page-header__container">
        <Link to="/" lang="en" className="logo page-header__logo">
          <span className="logo-design-color">Web</span>Studio
        </Link>

        <button
          type="button"
          className="mobile-menu__open js-open-menu is-open"
          onClick={() => setShowMobMenu(true)}
        >
          <Burger />
        </button>
        <div className={`mobile-menu ${showMobMenu && "is-open"}`}>
          <button
            type="button"
            className="mobile-menu__close js-close-menu"
            onClick={() => setShowMobMenu(false)}
          >
            <CloseIcon styles='mobile-menu__icon-close' />
          </button>
          <div className="mobile-menu__set">
            <nav className="mobile-menu__nav">
              <ul className="mobile-menu__nav-list">
                <li className="mobile-menu__nav-item">
                  <NavLink
                    className={`mobile-menu__nav-link ${({isActive}) => isActive && "active-link"}`}
                    to="/"
                    onClick={() => setShowMobMenu(false)}
                  >
                    Студія
                  </NavLink>
                </li>
                <li className="mobile-menu__nav-item">
                  <NavLink
                    className={`mobile-menu__nav-link ${
                      !path && "active-link"
                    }`}
                    to="/portfolio"
                    onClick={() => setShowMobMenu(false)}
                  >
                    Портфоліо
                  </NavLink>
                </li>
                <li className="mobile-menu__nav-item">
                  <a className="mobile-menu__nav-link" href="#j">
                    Контакти
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <ul className="mobile-menu__contact-list">
                <li className="mobile-menu__contact-item">
                  <a
                    className="mobile-menu__contact-tel"
                    href="tel:+380961111111"
                  >
                    +380961111111
                  </a>
                </li>
                <li className="mobile-menu__contact-item">
                  <a
                    className="mobile-menu__contact-mail"
                    href="mailto:info@devstudio.com"
                  >
                    info@devstudio.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mobile-menu__social-list">
                <li className="mobile-menu__social-item">
                  <a className="mobile-menu__social-link" href="#j">
                    Instagram
                  </a>
                </li>
                <li className="mobile-menu__social-item">
                  <a className="mobile-menu__social-link" href="#j">
                    Twitter
                  </a>
                </li>
                <li className="mobile-menu__social-item">
                  <a className="mobile-menu__social-link" href="#j">
                    Facebook
                  </a>
                </li>
                <li className="mobile-menu__social-item">
                  <a className="mobile-menu__social-link" href="j#">
                    Linkedln
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav>
          <ul className="nav">
            <li className="nav__item">
              <NavLink
                to="/"
                className={`nav__link  ${
                  path && "nav__studio--bottom-border active-link"
                }`}
              >
                Студія
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/portfolio"
                className={`nav__link ${
                  !path && "active-link nav__portfolio--bottom-border"
                }`}
              >
                Портфоліо
              </NavLink>
            </li>
            <li className="nav__item">
              <a href="#h" className="nav__link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <ul className="contact">
          <li className="contact__item">
            <a href="mailto:info@devstudio.com" className="contact__link">
              <MailIcon />
              info@devstudio.com
            </a>
          </li>
          <li className="contact__item">
            <a href="tel:+380961111111" className="contact__link">
              <PhoneIcon />
              +38 096 111 11 11
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
