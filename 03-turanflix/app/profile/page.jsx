import MoviesSection from "@/components/MoviesSection";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const getFavoriteMovies = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/user/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return;
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  const movies = (await getFavoriteMovies(session?.user?.id)) || [];

  return (
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
      {movies.length > 0 && (
        <MoviesSection
          title={"Your Favorites"}
          movies={movies}
          showAll={true}
        />
      )}
    </section>
  );
};

export default ProfilePage;
