import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full max-w-5xl bg-nav p-6 uppercase">
      <Link href={"/"}>
        <h1
          className="text-4xl font-bold tracking-widest text-transparent bg-gradient-to-r bg-clip-text from-rose-500 to-rose-50"
          draggable
        >
          CRUD
        </h1>
      </Link>
      <Link
        href={"/addBlog"}
        className="flex gap-2 items-center justify-center text-lg font-semibold tracking-wide px-4 py-3 rounded-lg bg-blue-accent hover:bg-blue-accent-hover "
        draggable
      >
        <IoMdAdd size={24} />
        <p>add blog</p>
      </Link>
    </nav>
  );
};

export default Navbar;
