import React from "react";
import { clients } from "../../lib/placeholder-data";

function Clients() {
  return (
    <section className="section-clients">
      <div className="container">
        <h2 className="clients__title">Постійні клієнти</h2>
        <ul className="clients__list">
          {clients.map((e) => {
            return (
              <li key={e.id}>
                <a href={e.link} className="clients__link">
                  {e.icon}
                </a>
              </li>
            );
          })}
        
        </ul>
      </div>
    </section>
  );
}

export default Clients;
