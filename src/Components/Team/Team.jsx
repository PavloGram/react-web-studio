import React from "react";
import { team } from "../../lib/placeholder-data";

function Team() {
  return (
    <section className="section-team">
      <div className="container">
        <h2 className="team__title">Наша команда</h2>
        <ul className="team__list">
          {team.map((e) => {
            return (
              <li className="team__item" key={e.id}>
                <picture>
                  <source
                    srcSet={`
                    ${e.mobPhoto}    1x,
                    ${e.mobPhoto2x} 2x
                  `}
                    media="(max-width:767px)"
                  />
                  <source
                    srcSet={`
                    ${e.tabPhoto}   1x,
                    ${e.tabPhoto2x} 2x
                  `}
                    media="(max-width:1199px)"
                  />
                  <source
                    srcSet={`
                    ${e.descPhoto}    1x,
                    ${e.descPhoto2x} 2x
                  `}
                    media="(min-width:1200px)"
                  />
                  <img className="team__images" src={e.mobPhoto} alt={e.alt} />
                </picture>
                <div className="team-card">
                  <h3 className="team-card__title">{e.name}</h3>
                  <p lang="en" className="team-card__text">
                    {e.position}
                  </p>
                  <ul className="team-card__list">
                    {e.socialNetworks.map((el) => {
                      return (
                        <li key={el.id}>
                          <a href={el.link} className="team-card__link">
                            {el.icon}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Team;
