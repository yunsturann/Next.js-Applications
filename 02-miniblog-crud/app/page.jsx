import BlogItem from "@/components/BlogItem";

const getBlogs = async () => {
  try {
    const res = await fetch(process.env.BASE_URL + "/api/blogs", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const { blogs } = await getBlogs();
  return (
    <section className="pb-20">
      {/*Title */}
      <h2 className="text-2xl text-center font-semibold my-6">BLOGS</h2>
      {/* Blogs */}
      <ul className="text-neutral-700 space-y-4">
        {blogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </ul>
    </section>
  );
}
