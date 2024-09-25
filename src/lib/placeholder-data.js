import antenna from "../Images/benefits-icon/antenna.svg";
import clock from "../Images/benefits-icon/clock.svg";
import diagram from "../Images/benefits-icon/diagram.svg";
import astronaut from "../Images/benefits-icon/astronaut.svg";

import workApp1 from "../Images/works-img/box-1-desktop.jpg";
import workApp1X2 from "../Images/works-img/box-1-desktop@x2.jpg";
import workMobApp from "../Images/works-img/box-2-desktop.jpg";
import workMobAppX2 from "../Images/works-img/box-2-desktop@x2.jpg";
import workDesign from "../Images/works-img/box-3-desktop.jpg";
import workDesignX2 from "../Images/works-img/box-3-desktop@x2.jpg";

const benefits = [
  {
    id: 1,
    title: "Увага до деталей",
    description:
      "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.",
    icon: antenna,
  },
  {
    id: 2,
    title: "Пунктуальність",
    description:
      "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.",
    icon: clock,
  },
  {
    id: 3,
    title: "Планування",
    description:
      "Так само консультація з широким активом значною мірою зумовлює.",
    icon: diagram,
  },
  {
    id: 4,
    title: "Сучасні технології",
    description:
      "Значимість цих проблем настільки очевидна, що реалізація планових завдань.",
    icon: astronaut,
  },
];

const myWorks = [
  {
    id: 1,
    description: "Десктопні додатки",
    img: workApp1,
    imgX2: workApp1X2,
  },
  {
    id: 2,
    description: "Мобільні додатки",
    img: workMobApp,
    imgX2: workMobAppX2,
  },
  {
    id: 3,
    description: "Дизайнерські рішення",
    img: workDesign,
    imgX2: workDesignX2,
  },
];

export { benefits, myWorks };
