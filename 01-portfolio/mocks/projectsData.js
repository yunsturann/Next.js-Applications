import website from "../public/assets/images/website.png";
import interactiveCard from "../public/assets/images/interactiveCard.png";
import miniBlog from "../public/assets/images/mini-blog.png";
import coffee from "../public/assets/images/coffee.png";
import turanflix from "../public/assets/images/turanflix.png";
import formStepper from "../public/assets/images/formStepper.png";

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

    title: "Old Website",
    description:
      "This is my static website. Includes my js, css, html projects.",
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
    title: "Interactive Card",
    description: "I used hook-form in details with zod validation",
    img: interactiveCard,
    links: [
      {
        name: "Webpage",
        url: "https://my-interactive-card.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/web-dev-projects/tree/main/14-interactive-card",
      },
    ],
  },
  {
    id: 4,
    title: "Form Stepper",
    description: "A multi-step form with zod validation and useContext.",
    img: formStepper,
    links: [
      {
        name: "Webpage",
        url: "https://my-form-stepper.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/web-dev-projects/tree/main/10-multi-step-form",
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
