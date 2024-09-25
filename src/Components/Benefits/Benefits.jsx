import React from 'react'
import { benefits } from '../../lib/placeholder-data'

function Benefits() {
  return (
    <section className="section-benefits">
    <div className="container">
      <h2 className="benefits__title visually-hidden">Наші переваги</h2>
      <ul className="benefits__list">
        {benefits.map(e => {
            return  <li className="benefits__item" key={e.id}>
            <div className="benefits__icon-wrap">
                <img src={e.icon} alt='' className='benefits__icon'/>
             
            </div>
            <h3 className="benefits__title">{e.title}</h3>
            <p className="benefits__text">
              {e.description}
            </p>
          </li>
        })}
        
      </ul>
    </div>
  </section>
  )
}

export default Benefits