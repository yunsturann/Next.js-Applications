# Next.js-Applications

This repo includes the codes of the projects I made with Next.js

## [Portfolio](https://yunsturann.vercel.app/)

- I practiced tailwind and next.js
- hover effects
- serverside and clientside components were used.
- Image, Link components of Next.js were learned better.
- slick-slider was used.
- added nodemailer (server action)

## [Mini Blog](https://miniblog-crud.vercel.app/)

- I learned api folder and how to connect mongodb atlas
- Crud operations were made by using methods such as GET,POST,DELETE,PUT
- useRouter's refresh and push methods are beneficial.
- focusing the last character of input by using useRef
- https regex and converting texts to anchor tag when it matches.
- includes dynamic page and api router.
- Finally, data fetching cache strategies were covered
  - cache:"force-cache" default. produce static html
  - cache:"no-store" must be used if content changes all the time.
- react-toast was added to inform user & increase user experience

## [TuranFlix](https://turanflix.vercel.app/)

[tmdb api](https://www.themoviedb.org/)

- Dynamic title & descriptions for every page to increase SEO
- Parallel data fetching is essential to save time. All promises runs in parallel, they dont wait for each other.
- server actions to connect db without api routes.
  - deleteFromFavorites deletes the favorited movie clicked
  - sendEmail action to send an email from the contact form
- I used useFormState & useFromStatus to handle forms.
  - useFormState provides a state to show errors when clicked or successful message can be handled.
  - useFormStatus is required to disable the button while the form is pending
- Movies' trailers can be watch from youtube thanks to LiteYoutubeEmbed. When user clicks, the link button changes the parameter of the url so that a new component renders to watch the movie.
- There is a debounce in the search bar. its purpose is not to make request for every key stroke. It decreases server/api loads.
- There are several dropdowns. They close when the user scrolls a little (-+200px). There is an event for this that will be active when the dropdown menu is opened.
- Users can add a movie to his/her favorites but they have to login with Google.
  - I handled this case with Next-auth. It creates session tokens when user logins successfully.
- Unauthenticated users can't access the profile page or route handlers.
  - There is a middleware matchers. It protects pages and apis.
- I used swipperjs to make perfect slides.
- framermotion is used for card animation
  - I created a component to import and export motion.div because I want that some cards should be rendered on the server side. motion.div runs on the client.
- Mongoose is an another perfect lib to connect mongodb and to create schemas.
  - There are two models: User and Movie

I made the design on my own but I was a little inspired by other movie apps because I am not a designer.
I developed this project to improve my webdev skills with Next.js, Tailwind and MongoDB.
