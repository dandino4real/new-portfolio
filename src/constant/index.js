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
    image: smooze,
    source_code_link: "https://github.com/",
    hosted_link: "https://ilearn-sq012-node.netlify.app"
  },
  {
    name: "AirBnb Clone",
    description:
      "Web application that enables users to search for food to cook based on the ingredients they have in their kitchen. And also provide a list of recipes for the selected food and videos link on how to prepare the meal.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: findfood,
    source_code_link: "https://github.com/find-food",
  },
  {
    name: "Event Ticketing App",
    description:
      " web application that allows users to pay for event tickets online.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "RESTapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com//Paystack-integration",
  },
];

export { services, technologies, experiences, testimonials, projects };
