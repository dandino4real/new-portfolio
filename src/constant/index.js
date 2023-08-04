import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  decagon,
  lgs,
  starbucks,
  tesla,
  smooze,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  findfood,
  ilearn,
  house,
  dashboard,
  weather,
  fitness,
  smoove,
  rider,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Adonis JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const experiences = [
  {
    title: "AdonisJs Developer",
    company_name: "Esoft response",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - April 2023",
    points: [
      "Developing and maintaining server side applications using Adonisjs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create a membership management system.",
      "Implementing responsive API endpoints using  REST.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Decagon",
    icon: decagon,
    iconBg: "#383E56",
    date: "Feb 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Node.js React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Facilitator",
    company_name: "Dansol Innovate Academy ",
    icon: lgs,
    iconBg: "#383E56",
    date: "Jan 2021 - July 2021",
    points: [
      "Taught Basic web development, including html, css and javascript.",

      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in project reviews and providing constructive feedback to the students.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Daniel proved me wrong.",
    name: " Ukpono Obott",
    designation: "Cloud Engineer",
    company: "Perizer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Daniel does.",
    name: "Oluwafemi Tom",
    designation: ".Net Developer",
    company: "Decagon",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    testimonial:
      "After Daniel optimized our website, our traffic increased by 50%. We can't thank her enough!",
    name: "Godstine Omeregie",
    designation: "Software Engineer",
    company: "Pinkotab Technologies",
    image: "https://randomuser.me/api/portraits/women/92.jpg",
  },
];

const projects = [
  {
    name: "SwiftRider",
    description:
      "Web-based platform connecting pickup users with riders, streamlining logistics.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],

    image: rider,
    source_code_link: "https://github.com/dandino4real/swift-Rider",
   website: "https://swift-rider.netlify.com/",
  },
  {
    name: "Smoove",
    description:
      "A music app for endless tunes and seamless playlists. Elevate your listening experience with personalized tracks on the go.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
    ],

    image: smoove,
    source_code_link: "https://github.com/dandino4real/Music-App",
   website: "https://smoozepro.netlify.app",
  },
  {
    name: "iLearn",
    description:
      "Web-based platform that allows learners to meet verified tutors and upgrade their skill-set with relevant courses.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
    ],

    image: ilearn,
    source_code_link: "https://github.com/dandino4real/iLearn-api",
   website: "https://ilearn-sq012-node.netlify.app",
  },

  {
    name: "AirBnb Clone",
    description:
      "Your ultimate travel companion. Discover, book, and stay in unique accommodations worldwide with ease. Unleash the wanderlust within you",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: house,
    source_code_link: "https://github.com/dandino4real/airBnb",
   website: "https://daniel-airbnb.netlify.app/",
  },
  {
    name: "Admin Dashboard",
    description:
      "A web application that simplifies financial data and user management for seamless monitoring and control.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/dandino4real/Dashboard",
   website: "https://dandino-dashboard.netlify.app/",
  },
  {
    name: "Weather Application ",
    description:
      " web application that provides users with real-time weather updates and forecasts.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Material Ui",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/dandino4real/WeatherApp",
   website: "https://dandino-weather-app.netlify.app/",
  },
  {
    name: "Fitness Application",
    description:
      "A sleek and user-friendly web application where fitness enthusiasts can explore and book accommodations tailored to their active lifestyle.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML 5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/dandino4real/fitnessApp",
   website: "https://dandino-fitness-app..netlify.app",
  },
  {
    name: "Food Ordering App",
    description:
      "Web application that allows users to explore and find a variety of delicious cooked meals.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: findfood,
    source_code_link: "https://github.com/dandino4real/food-app",
   website: "https://foodorderring.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
