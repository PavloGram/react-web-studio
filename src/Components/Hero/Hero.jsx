import React from "react";

export default function Hero({ setIsActiveModal }) {
  return (
    <section className="section-hero">
      <div className="container">
        <h1 className="hero__title">
          Ефективні рішення для
          <br />
          вашого бізнесу
        </h1>
        <button
          type="submit"
          className="button hero-button"
          onClick={() => setIsActiveModal(true)}
        >
          Замовити послугу
        </button>
      </div>
    </section>
  );
}
