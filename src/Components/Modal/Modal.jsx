import React from "react";

import FormCloseIcon from "../../Ui/Form-icon/FormCloseIcon";
import FormPersonIcon from "../../Ui/Form-icon/FormPersonIcon";
import FormPhoneIcon from "../../Ui/Form-icon/FormPhoneIcon";
import FormMailIcon from "../../Ui/Form-icon/FormMailIcon";
import FormCheckIcon from "../../Ui/Form-icon/FormCheckIcon";

function Modal({ isActive, setIsActiveModal }) {
  return (
    <div
      className={`backdrop ${!isActive && "is-hidden"} `}
      onClick={() => setIsActiveModal(false)}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close-button"
          type="button"
          onClick={() => setIsActiveModal(false)}
        >
          <FormCloseIcon />
        </button>
        <p className="modal__text">Залиште свої данні, ми вам передзвонимо</p>
        <form>
          <label className="modal__name-label" htmlFor="person-name">
            Ім’я
          </label>
          <div className="modal__name-position">
            <input
              className="modal__name-input"
              id="person-name"
              type="text"
              name="person-name"
            />
            <FormPersonIcon />
          </div>

          <label className="modal__tel-label" htmlFor="person-tel">
            Телефон
          </label>
          <div className="modal__tel-position">
            <input
              className="modal__tel-input"
              id="person-tel"
              type="tel"
              name="person-tel"
            />
            <FormPhoneIcon />
          </div>

          <label className="modal__mail-label" htmlFor="person-mail">
            Пошта
          </label>
          <div className="modal__mail-position">
            <input
              className="modal__mail-input"
              id="person-mail"
              type="email"
              name="person-mail"
            />
            <FormMailIcon />
          </div>

          <label className="modal__comment-label" htmlFor="person-comment">
            Коментар
          </label>
          <textarea
            className="modal__comment"
            id="person-comment"
            name="person-comment"
            placeholder="Введіть текст"
          ></textarea>

          <div className="modal__checkbox">
            <label htmlFor="terms-check">
              <input
                type="checkbox"
                id="terms-check"
                name="terms-check"
                className="modal__checkbox-input"
              />
              <span className="modal__checkbox-text"></span>
              Погоджуюсь з розсилкою та приймаю
              <a href="#s" className="modal__checkbox-link">
                Умови договору
              </a>
              <svg className="modal__checkbox-icon" width="16" height="16">
                <use href="./images/icon.svg#icon-icon-check-5"></use>
              </svg>
              <FormCheckIcon />
            </label>
          </div>
          <button type="submit" className="button modal__form-button">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
