import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import RemoveBtn from "./RemoveBtn";

const BlogItem = ({ blog }) => {
  const makeLinks = (text) => {
    // Regex kullanarak https ile başlayan URL'leri tespit et
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (index % 2 === 1) {
        // Eğer indeks tekse (URL kısmı), bağlantı olarak döndür
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      } else {
        // Eğer indeks çiftse (metin kısmı), metni direk döndür
        return part;
      }
    });
  };

  const convertDate = (dateString) => {
    return `${dateString.slice(8, 10)}.${dateString.slice(
      5,
      7
    )}.${dateString.slice(0, 4)}`;
  };

  return (
    <li className="border-2 border-gray-500 bg-gray-300 p-4 rounded-md flex justify-between gap-4 sm:gap-6">
      {/*Content */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-wide">
          {blog.title}
        </h2>
        {blog.createdAt !== blog.updatedAt && (
          <p className="text-xs opacity-70">{`edited at: ${convertDate(
            blog.updatedAt
          )}`}</p>
        )}
        <p className="text-sm sm:text-base mt-2">{makeLinks(blog.content)}</p>
      </div>
      {/*Icons & Date*/}
      <div className="flex flex-col justify-between items-center">
        <div className="flex gap-2 sm:gap-4">
          <RemoveBtn id={blog._id} />
          <Link
            href={"/editBlog/" + blog._id}
            className="cursor-pointer hover:opacity-70"
          >
            <FaRegEdit size={24} />
          </Link>
        </div>
        <p className="text-xs opacity-70">{convertDate(blog.createdAt)}</p>
      </div>
    </li>
  );
};

export default BlogItem;
