import React from 'react'

function Works() {
  return (
    <section class="works-section">
        <div class="container">
          <h2 class="works__title">Чим ми займаємося</h2>
          <ul class="works__list">
            <li class="works__item">
              <div class="works__div">
                <picture>
                  <source
                    srcset="
                      ./images/work/box-1-desktop.jpg    1x,
                      ./images/work/box-1-desktop@x2.jpg 2x
                    "
                  />
                  <img
                    class="works__images"
                    src="./images/work/box-1-desktop.jpg"
                    alt="людина працює на планшеті через клавіатуру "
                    width="370"
                  />
                </picture>
                <p class="works__text">Десктопні додатки</p>
              </div>
            </li>
            <li class="works__item">
              <div class="works__div">
                <picture>
                  <source
                    srcset="
                      ./images/work/box-2-desktop.jpg    1x,
                      ./images/work/box-2-desktop@x2.jpg 2x
                    "
                  />
                  <img
                    class="works__images"
                    src="./images/work/box-2-desktop.jpg"
                    alt="смартфон і ноутбук"
                    width="370"
                  />
                </picture>
                <p class="works__text">Мобільні додатки</p>
              </div>
            </li>
            <li class="works__item">
              <div class="works__div">
                <picture>
                  <source
                    srcset="
                      ./images/work/box-3-desktop.jpg    1x,
                      ./images/work/box-3-desktop@x2.jpg 2x
                    "
                  />
                  <img
                    class="works__images"
                    src="./images/work/box-3-desktop.jpg"
                    alt="робота на планшеті за допомогою стілуса"
                    width="370"
                  />
                </picture>
                <p class="works__text">Дизайнерські рішення</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Works