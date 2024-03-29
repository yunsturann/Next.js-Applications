"use client";

import MoviesSection from "@/components/moviesSection/MoviesSection";
import MovieContext from "@/context/MoviesContext";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Loading from "@/components/loading/Loading";

const ProfilePage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/profile");
    },
  });

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const res = await fetch(`/api/movies/${session?.user?.id}`);
      const data = await res.json();
      setIsLoading(false);
      setMovies(data);
    };
    if (session?.user?.id) fetchPosts();
  }, [session]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      <section className="flex-1 py-32 space-y-16 bg-gray-800 text-white">
        <header className="space-y-4 container text-base sm:text-lg">
          <h2 className="heading_one">Profile</h2>
          <p>
            Welcome,{" "}
            <strong className="text-yellow-400">{session?.user?.name}!</strong>{" "}
            You are now authenticated.
          </p>
          <p>Here you can see your favorite movies.</p>
        </header>
        {/* <Movies movies={movies} /> */}
        {isLoading && <Loading />}
        {movies.length > 0 && (
          <MoviesSection
            title={"Your Favorites"}
            movies={movies}
            showAll={true}
          />
        )}
      </section>
    </MovieContext.Provider>
  );
};

export default ProfilePage;
