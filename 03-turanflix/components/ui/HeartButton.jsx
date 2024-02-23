"use client";
import { FaHeart } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const HeartButton = ({ movie, classes }) => {
  const { data: session } = useSession();

  const handleClick = async () => {
    if (!session) {
      toast.error("You must be logged in to add a movie to favorites");
      return;
    }
    try {
      const res = await fetch("/api/movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie, userId: session?.user.id }),
      });
      if (res.ok) {
        toast.success("Movie added to favorites");
      } else {
        const data = await res.json();
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred while adding the movie to favorites");
    }
  };

  return (
    <button
      type="button"
      className={`border-2 rounded-full  flex justify-center items-center text-white hover:text-rose-500 hover:border-red-400 transition duration-300 ${classes}`}
      onClick={handleClick}
    >
      <FaHeart />
    </button>
  );
};

export default HeartButton;
