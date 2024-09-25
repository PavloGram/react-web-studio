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

import teamIgorMob from "../Images/team-photo/igor-mobile.jpg";
import teamIgorMob2x from "../Images/team-photo/igor-mobile@x2.jpg";
import teamIgorTab from "../Images/team-photo/igor-tablet.jpg";
import teamIgorTab2x from "../Images/team-photo/igor-tablet@x2.jpg";
import teamIgorDesk from "../Images/team-photo/igor-desktop.jpg";
import teamIgorDesk2x from "../Images/team-photo/igor-desktop@x2.jpg";
import teamOlgaMob from "../Images/team-photo/olga-mobile.jpg";
import teamOlgaMob2x from "../Images/team-photo/olga-mobile@x2.jpg";
import teamOlgaTab from "../Images/team-photo/olga-tablet.jpg";
import teamOlgaTab2x from "../Images/team-photo/olga-tablet@x2.jpg";
import teamOlgaDesk from "../Images/team-photo/olga-desktop.jpg";
import teamOlgaDesk2x from "../Images/team-photo/olga-desktop@x2.jpg";
import teamMukolaMob from "../Images/team-photo/mukola-mobile.jpg";
import teamMukolaMob2x from "../Images/team-photo/mukola-mobile@x2.jpg";
import teamMukolaTab from "../Images/team-photo/mukola-tablet.jpg";
import teamMukolaTab2x from "../Images/team-photo/mukola-tablet@x2.jpg";
import teamMukolaDesk from "../Images/team-photo/mukola-desktop.jpg";
import teamMukolaDesk2x from "../Images/team-photo/mukola-desktop@x2.jpg";
import teamMuhailoMob from "../Images/team-photo/muhail-mobile.jpg";
import teamMuhailoMob2x from "../Images/team-photo/muhail-mobile@x2.jpg";
import teamMuhailoTab from "../Images/team-photo/muhail-tablet.jpg";
import teamMuhailoTab2x from "../Images/team-photo/muhail-tablet@x2.jpg";
import teamMuhailoDesk from "../Images/team-photo/muhail-desktop.jpg";
import teamMuhailoDesk2x from "../Images/team-photo/muhail-desktop@x2.jpg";
// import instagram from '../Ui/InstagarmIcon'
// import twitter from '../Ui/TwitterIcon'
// import facebook from '../Ui/FacebookIcon'
// import linkedin from '../Ui/LinkedinIcon'
import FacebookIcon from "../Ui/FacebookIcon";
import TwitterIcon from "../Ui/TwitterIcon";
import InstagarmIcon from "../Ui/InstagarmIcon";
import LinkedinIcon from "../Ui/LinkedinIcon";
import ClientIcon1 from "../Ui/Client-icon/ClientIcon1";
import ClientIcon2 from "../Ui/Client-icon/ClientIcon2";
import ClientIcon3 from "../Ui/Client-icon/ClientIcon3";
import ClientIcon4 from "../Ui/Client-icon/ClientIcon4";
import ClientIcon5 from "../Ui/Client-icon/ClientIcon5";
import ClientIcon6 from "../Ui/Client-icon/ClientIcon6";

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
    title: "Десктопні додатки",
    alt: "людина працює на планшеті через клавіатуру",
    img: workApp1,
    imgX2: workApp1X2,
  },
  {
    id: 2,
    title: "Мобільні додатки",
    alt: "смартфон і ноутбук",
    img: workMobApp,
    imgX2: workMobAppX2,
  },
  {
    id: 3,
    title: "Дизайнерські рішення",
    alt: "робота на планшеті за допомогою стілуса",
    img: workDesign,
    imgX2: workDesignX2,
  },
];

const team = [
  {
    id: 1,
    name: "Ігор Дем'яненко",
    position: "Product Designer",
    mobPhoto: teamIgorMob,
    mobPhoto2x: teamIgorMob2x,
    tabPhoto: teamIgorTab,
    tabPhoto2x: teamIgorTab2x,
    descPhoto: teamIgorDesk,
    descPhoto2x: teamIgorDesk2x,
    alt: "молодий чоловік в сорочці і окулярах",
    socialNetworks: [
      {
        id: 1,
        link: "/",
        name: "instagram",
        icon: <InstagarmIcon styles="team-icon" />,
      },
      {
        id: 2,
        link: "/",
        name: "twitter",
        icon: <TwitterIcon styles="team-icon" />,
      },
      {
        id: 3,
        link: "/",
        name: "facebook",
        icon: <FacebookIcon styles="team-icon" />,
      },
      {
        id: 4,
        link: "/",
        name: "linkedin",
        icon: <LinkedinIcon styles="team-icon" />,
      },
    ],
  },
  {
    id: 2,
    name: "Ольга Рєпіна",
    position: "Frontend Developer",
    mobPhoto: teamOlgaMob,
    mobPhoto2x: teamOlgaMob2x,
    tabPhoto: teamOlgaTab,
    tabPhoto2x: teamOlgaTab2x,
    descPhoto: teamOlgaDesk,
    descPhoto2x: teamOlgaDesk2x,
    alt: "молода дівчина в окулярах",
    socialNetworks: [
      {
        id: 1,
        link: "/",
        name: "instagram",
        icon: <InstagarmIcon styles="team-icon" />,
      },
      {
        id: 2,
        link: "/",
        name: "twitter",
        icon: <TwitterIcon styles="team-icon" />,
      },
      {
        id: 3,
        link: "/",
        name: "facebook",
        icon: <FacebookIcon styles="team-icon" />,
      },
      {
        id: 4,
        link: "/",
        name: "linkedin",
        icon: <LinkedinIcon styles="team-icon" />,
      },
    ],
  },
  {
    id: 3,
    name: "Микола Тарасов",
    position: "Marketing",
    mobPhoto: teamMukolaMob,
    mobPhoto2x: teamMukolaMob2x,
    tabPhoto: teamMukolaTab,
    tabPhoto2x: teamMukolaTab2x,
    descPhoto: teamMukolaDesk,
    descPhoto2x: teamMukolaDesk2x,
    alt: "молодий усміхнений чоловік в сорочці",
    socialNetworks: [
      {
        id: 1,
        link: "/",
        name: "instagram",
        icon: <InstagarmIcon styles="team-icon" />,
      },
      {
        id: 2,
        link: "/",
        name: "twitter",
        icon: <TwitterIcon styles="team-icon" />,
      },
      {
        id: 3,
        link: "/",
        name: "facebook",
        icon: <FacebookIcon styles="team-icon" />,
      },
      {
        id: 4,
        link: "/",
        name: "linkedin",
        icon: <LinkedinIcon styles="team-icon" />,
      },
    ],
  },
  {
    id: 4,
    name: "Михайло Єрмаков",
    position: "UI Designer",
    mobPhoto: teamMuhailoMob,
    mobPhoto2x: teamMuhailoMob2x,
    tabPhoto: teamMuhailoTab,
    tabPhoto2x: teamMuhailoTab2x,
    descPhoto: teamMuhailoDesk,
    descPhoto2x: teamMuhailoDesk2x,
    alt: "молодий чоловік в футболці і окулярах",
    socialNetworks: [
      {
        id: 1,
        link: "/",
        name: "instagram",
        icon: <InstagarmIcon styles="team-icon" />,
      },
      {
        id: 2,
        link: "/",
        name: "twitter",
        icon: <TwitterIcon styles="team-icon" />,
      },
      {
        id: 3,
        link: "/",
        name: "facebook",
        icon: <FacebookIcon styles="team-icon" />,
      },
      {
        id: 4,
        link: "/",
        name: "linkedin",
        icon: <LinkedinIcon styles="team-icon" />,
      },
    ],
  },
];

const clients = [
  {
    id: 1,
    link: "/",
    icon: <ClientIcon1 styles="clients__icon" />,
  },
  {
    id: 2,
    link: "/",
    icon: <ClientIcon2 styles="clients__icon" />,
  },
  {
    id: 3,
    link: "/",
    icon: <ClientIcon3 styles="clients__icon" />,
  },
  {
    id: 4,
    link: "/",
    icon: <ClientIcon4 styles="clients__icon" />,
  },
  {
    id: 5,
    link: "/",
    icon: <ClientIcon5 styles="clients__icon" />,
  },
  {
    id: 6,
    link: "/",
    icon: <ClientIcon6 styles="clients__icon" />,
  },
];

export { benefits, myWorks, team, clients };
