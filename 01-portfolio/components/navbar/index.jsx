// ** Nextj Imports
import Link from "next/link";

// ** Constants
import { navLinksData } from "@/mocks/navlinks";

// ** Custom Components
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 py-8 md:py-10 lg:py-12 uppercase bg-black text-white ">
      <div className="container mx-auto flex justify-between items-center px-8 sm:px-14 md:px-16 xl:px-0">
        <Link
          draggable
          href="/"
          title="Go to home page"
          className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest uppercase text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey"
        >
          Yunus
        </Link>

        {/* mobil hamburger */}
        <Hamburger />

        {/* navbar */}
        <nav
          className="hidden sm:block space-x-6 md:space-x-8 lg:space-x-12"
          draggable
        >
          {navLinksData.map(({ id, title, href }) => (
            <Link
              key={id}
              className="nav-item lg:text-lg font-semibold py-1 lg:py-2 tracking-wider hover:text-gega-melon "
              href={href}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
