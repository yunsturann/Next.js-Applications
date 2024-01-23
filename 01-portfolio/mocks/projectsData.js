import website from "../public/assets/images/website.png";
import drumkit from "../public/assets/images/drumkit.png";
import quoteGen from "../public/assets/images/quoteGen.png";
import todoV2 from "../public/assets/images/todoV2.png";
import weather from "../public/assets/images/weather.png";
import miniBlog from "../public/assets/images/mini-blog.png";

export const projectsData = [
  {
    id: 0,
    title: "Website",
    description: "This is my static and responsive website.",
    img: website,
    links: [
      { name: "Webpage", url: "https://yunsturann.github.io/website/" },
      { name: "Github", url: "https://github.com/yunsturann/website" },
    ],
  },
  {
    id: 1,
    title: "Drum Kit",
    description: "A drum kit application with animations.",
    img: drumkit,
    links: [
      {
        name: "Webpage",
        url: "https://yunsturann.github.io/website/Projects/Drum%20Kit/index.html",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/website/tree/main/Projects/Drum%20Kit",
      },
    ],
  },
  {
    id: 2,
    title: "Quote Generator",
    description: "This is Quote Generator. Quotes can be saved.",
    img: quoteGen,
    links: [
      {
        name: "Webpage",
        url: "https://yunsturann.github.io/website/Projects/Quote%20Generator/index.html",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/website/tree/main/Projects/Quote%20Generator",
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
