import React from "react";
import { myWorks } from "../../lib/placeholder-data";

function Works() {
  return (
    <section className="works-section">
      <div className="container">
        <h2 className="works__title">Чим ми займаємося</h2>
        <ul className="works__list">
          {myWorks.map((e) => {
            return (
              <li className="works__item" key={e.id}>
                <div className="works__div">
                  <picture>
                    <source srcSet={`${e.img} 1x, ${e.imgX2} 2x `} />
                    <img className="works__images" src={e.img} alt={e.alt} />
                  </picture>
                  <p className="works__text">{e.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Works;
