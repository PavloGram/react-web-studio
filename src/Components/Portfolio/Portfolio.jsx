import React, { useEffect, useState } from "react";
import portfolioData from "../../lib/portfolio-data";
import { portfolioBtn } from "../../lib/portfolio-btn";
import { textFish } from "../../lib/text-fish";

function Portfolio() {
  const [collectProject, setCollectProject] = useState([]);
  const [activeBtn, setActiveBtn] = useState("all");
  useEffect(() => {
    if (activeBtn === "all") {
      return setCollectProject(portfolioData);
    } else {
      return setCollectProject(
        portfolioData.filter((e) => {
          return e.type === activeBtn;
        })
      );
    }
  }, [activeBtn]);
  return (
    <section className="section-portfolio">
      <div className="container">
        <h1 className="portfolio__hidden-title visually-hidden">Портфоліо</h1>
        <ul className="portfolio__list-button">
          <li className="portfolio__item">
            <button
              className={`portfolio__button  ${
                activeBtn === "all" && "portfolio__button--activ"
              }`}
              onClick={() => setActiveBtn("all")}
            >
              Усі
            </button>
          </li>
          {portfolioBtn.map((e) => {
            return (
              <li key={e.id} className="portfolio__item">
                <button
                  onClick={() => setActiveBtn(e.type)}
                  className={`portfolio__button ${
                    activeBtn === e.type && "portfolio__button--activ"
                  }`}
                >
                  {e.title}
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="portfolio-product__list">
          {collectProject.map((e) => {
            return (
              <li key={e.id} className="portfolio-product__item">
                <div className="portfolio-product__overlay">
                  <picture>
                    <source
                      srcSet={`
                    ${e.mobImg} 1x,
                     ${e.mobImgX2} 2x`}
                      media="(max-width:767px)"
                    />
                    <source
                      srcSet={`
                  ${e.tabImg} 1x,
                 ${e.tabImgX2} 2x`}
                      media="(min-width:768px)"
                    />

                    <source
                      srcSet={`
                  ${e.descImg} x1,
                  ${e.descImgX2} 2x`}
                      media="(min-width:1200px)"
                    />

                    <img
                      className="portfolio-img"
                      src={e.mobImg}
                      alt="ноутбук"
                    />
                  </picture>
                  <p className="portfolio-product__overlay-text">{textFish}</p>
                </div>
                <div className="portfolio-product__description">
                  <h2 className="portfolio-product__title">{e.title}</h2>
                  <p className="portfolio-product__text">{e.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
