// ** Nextjs Imports
import Link from "next/link";

// ** Constants
import { navLinksData } from "@/mocks/navlinks";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 bg-black px-6 xl:px-0">
      <div className="container mx-auto text-gega-grey max-md:space-y-2 grid grid-cols-1 md:grid-cols-2">
        {/*Left content*/}
        <div>
          <Link
            href="/"
            className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider uppercase text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
            aria-label="yunus"
          >
            Yunus
          </Link>
          <div>
            <p className="text-sm md:text-lg ">
              2023 Yunus No &copy; COPYRIGHT
            </p>
          </div>
        </div>
        {/*Right content*/}
        <div>
          <h2 className="text-gega-red text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
            LINKS
          </h2>
          <ul className="flex space-x-6 md:space-x-10">
            {navLinksData.map(({ id, title, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="text-sm uppercase md:text-lg hover:text-gega-melon transition duration-300 p-2 pl-0"
                  aria-label={title}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
