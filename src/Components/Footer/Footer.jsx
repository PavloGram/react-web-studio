import React from "react";
import SendIcon from "../../Ui/SendIcon";
import { companySocialNetworks } from "../../lib/placeholder-data";

function Footer() {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="footer__list">
          <div className="footer-item">
            <a href="./index.html" lang="en" className="logo footer__logo">
              <span className="logo-design-color">Web</span> Studio
            </a>
            <address>
              <ul className="address__list">
                <li className="address__item">
                  <a
                    href="https://goo.gl/maps/CPtrU1FHBa2aNyZL9"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="address__office"
                  >
                    м. Київ, пр-т Лесі Українки, 26
                  </a>
                </li>
                <li className="address__item">
                  <a
                    href="mailto:hrampavlo@gmail.com"
                    className="address__contact"
                  >
                    hrampavlo@gmail.com
                  </a>
                </li>
                <li className="address__item">
                  <a href="tel:+380506624525" className="address__contact">
                    +38 050 662 45 25
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div className="footer-join__set">
            <p className="footer-join__title">Приєднуйтесь</p>
            <ul className="footer-join__list">
              {companySocialNetworks.map((e) => {
                return (
                  <li key={e.id}>
                    <a href={e.link} className="footer-join__link">
                      {e.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-form">
            <p className="footer-form__title">Підпишіться на розсилку</p>
            <form>
              <label htmlFor="footer=form-email"></label>
              <input
                className="footer-form__input"
                id="footer=form-email"
                type="email"
                name="footer=form-email"
                placeholder="E-mail"
              />
              <button className="button footer-form__button" type="submit">
                Підписатися
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
