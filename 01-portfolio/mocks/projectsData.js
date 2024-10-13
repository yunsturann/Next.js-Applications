import website from "../public/assets/images/website.png";
import interactiveCard from "../public/assets/images/interactiveCard.png";
import miniBlog from "../public/assets/images/mini-blog.png";
import stract from "../public/assets/images/stract.png";
import turanflix from "../public/assets/images/turanflix.png";
import formStepper from "../public/assets/images/formStepper.png";
import chira from "../public/assets/images/chira.png";
import whatsapp from "../public/assets/images/whatsappClone.png";

export const projectsData = [
  {
    title: "Whatsapp Web Clone",
    description: "To develop a large-scale application",
    img: whatsapp,
    links: [
      {
        name: "Webpage",
        url: "https://new-whatsapp-web-clone.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/whatsapp-clone",
      },
    ],
  },

  {
    title: "Chira",
    description: "A fullstack app to grasp dnd and reusable components",
    img: chira,
    links: [
      {
        name: "Webpage",
        url: "https://chira.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/chira-todo-management",
      },
    ],
  },

  {
    title: "Turanflix",
    description: "A fullstack movie app with Next.js, Tailwind and MongoDB",
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
    title: "My Old Website",
    description:
      "This is my static website. Includes my js, css, html projects",
    img: website,
    links: [
      { name: "Webpage", url: "https://yunsturann.github.io/website/" },
      { name: "Github", url: "https://github.com/yunsturann/website" },
    ],
  },
  {
    title: "Landing Page Stract",
    description: "A landing page with AOS animations",
    img: stract,
    links: [
      {
        name: "Webpage",
        url: "https://landing-page-stract.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/yunsturann/web-dev-projects/tree/main/27-landing-page-stract",
      },
    ],
  },

  {
    title: "Form Stepper",
    description: "A multi-step form with zod validation and useContext",
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
