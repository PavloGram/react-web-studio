import React, { useState } from "react";
import Burger from "../../Ui/Burger";
import CloseIcon from "../../Ui/CloseIcon";
import PhoneIcon from "../../Ui/PhoneIcon";
import MailIcon from "../../Ui/MailIcon";
import { Link, NavLink, useMatch } from "react-router-dom";

function Header() {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const urlHomePage = useMatch("/");
  const urlPortfolioPage = useMatch("/portfolio");
  const urlContactsPage = useMatch("/contacts");

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
            <CloseIcon styles="mobile-menu__icon-close" />
          </button>
          <div className="mobile-menu__set">
            <nav className="mobile-menu__nav">
              <ul className="mobile-menu__nav-list">
                <li className="mobile-menu__nav-item">
                  <NavLink
                    className={`mobile-menu__nav-link ${
                      urlHomePage && "active-link"
                    }`}
                    to="/"
                    onClick={() => setShowMobMenu(false)}
                  >
                    Студія
                  </NavLink>
                </li>
                <li className="mobile-menu__nav-item">
                  <NavLink
                    className={`mobile-menu__nav-link ${
                      urlPortfolioPage && "active-link"
                    }`}
                    to="/portfolio"
                    onClick={() => setShowMobMenu(false)}
                  >
                    Портфоліо
                  </NavLink>
                </li>
                <li className="mobile-menu__nav-item">
                  <NavLink
                    className={`mobile-menu__nav-link ${
                      urlContactsPage && "active-link"
                    }`}
                    to="/contacts"
                  >
                    Контакти
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div>
              <ul className="mobile-menu__contact-list">
                <li className="mobile-menu__contact-item">
                  <a
                    className="mobile-menu__contact-tel"
                    href="tel:+380506624525"
                  >
                    +38 050 662 45 25
                  </a>
                </li>
                <li className="mobile-menu__contact-item">
                  <a
                    className="mobile-menu__contact-mail"
                    href="mailto:hrampavlo@gmail.co"
                  >
                    hrampavlo@gmail.co
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mobile-menu__social-list">
                <li className="mobile-menu__social-item">
                  <a className="mobile-menu__social-link" href="instagram.com">
                    Instagram
                  </a>
                </li>
                <li className="mobile-menu__social-item">
                  <a className="mobile-menu__social-link" href="twitter.com">
                    Twitter
                  </a>
                </li>
                <li className="mobile-menu__social-item">
                  <a className="mobile-menu__social-link" href="facebook.com">
                    Facebook
                  </a>
                </li>
                <li className="mobile-menu__social-item">
                  <a className="mobile-menu__social-link" href="linkedin.com">
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
                  urlHomePage && "nav__studio--bottom-border active-link"
                }`}
              >
                Студія
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/portfolio"
                className={`nav__link ${
                  urlPortfolioPage &&
                  "active-link nav__portfolio--bottom-border"
                }`}
              >
                Портфоліо
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contacts"
                className={`nav__link ${
                  urlContactsPage && "active-link nav__contacts--bottom-border"
                }`}
              >
                Контакти
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="contact">
          <li className="contact__item">
            <a href="mailto:hrampavlo@gmail.com" className="contact__link">
              <MailIcon />
              hrampavlo@gmail.co
            </a>
          </li>
          <li className="contact__item">
            <a href="tel:+380506624525" className="contact__link">
              <PhoneIcon />
              +38 050 662 45 25
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
