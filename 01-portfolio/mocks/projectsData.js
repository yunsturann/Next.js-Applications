import website from "../public/assets/images/website.png";
import todoV2 from "../public/assets/images/todoV2.png";
import weather from "../public/assets/images/weather.png";
import miniBlog from "../public/assets/images/mini-blog.png";
import coffee from "../public/assets/images/coffee.png";
import turanflix from "../public/assets/images/turanflix.png";

export const projectsData = [
  {
    id: 0,
    title: "Turanflix",
    description: "A fullstack movie app with Next.js, Tailwind and MongoDB.",
    img: turanflix,
    links: [
      {
        name: "Webpage",
        url: "https://turanflix.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/Next.js-Applications/tree/main/03-turanflix",
      },
    ],
  },
  {
    id: 1,

    title: "Website",
    description: "This is my static and responsive website.",
    img: website,
    links: [
      { name: "Webpage", url: "https://yunsturann.github.io/website/" },
      { name: "Github", url: "https://github.com/yunsturann/website" },
    ],
  },
  {
    id: 2,
    title: "Animated Coffee App",
    description: "A coffee app with AOS animations",
    img: coffee,
    links: [
      {
        name: "Webpage",
        url: "https://coffee-app-animated.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/web-dev-projects/tree/main/08-coffee-app",
      },
    ],
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather app to learn fetching, JQuery and Bootstrap5.",
    img: weather,
    links: [
      {
        name: "Webpage",
        url: "https://yunsturann.github.io/website/Projects/Weather/index.html",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/website/tree/main/Projects/Weather",
      },
    ],
  },
  {
    id: 4,
    title: "Todo App",
    description: "Todo by using JQuery and Bootstrap.",
    img: todoV2,
    links: [
      {
        name: "Webpage",
        url: "https://yunsturann.github.io/website/Projects/To-do-list-v2/index.html",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/website/tree/main/Projects/To-do-list-v2",
      },
    ],
  },
  {
    id: 5,
    title: "Mini Blog",
    description: "To learn CRUD Operations with Mongoose & NEXT",
    img: miniBlog,
    links: [
      {
        name: "Webpage",
        url: "https://miniblog-crud.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/Next.js-Applications/tree/main/02-miniblog-crud",
      },
    ],
  },
];
