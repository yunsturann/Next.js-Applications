import BlogForm from "@/components/BlogForm";

const AddBlog = () => {
  return (
    <section>
      {/*Title */}
      <h2 className="text-2xl text-center font-semibold my-6">ADD BLOG</h2>
      {/*Form*/}
      <BlogForm _method="POST" url={"/api/blogs"} />
    </section>
  );
};

export default AddBlog;
