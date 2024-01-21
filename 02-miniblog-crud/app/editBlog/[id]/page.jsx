import BlogForm from "@/components/BlogForm";
import React from "react";

const getBlog = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/blogs/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(res.statusMessage);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditBlog = async ({ params }) => {
  const { id } = params;

  const blog = await getBlog(id);

  return (
    <section>
      {/*Title */}
      <h2 className="text-2xl text-center font-semibold my-6">EDIT BLOG</h2>
      {/*Form*/}
      <BlogForm
        _title={blog?.title}
        _content={blog?.content}
        _method="PUT"
        url={`/api/blogs/${id}`}
      />
    </section>
  );
};

export default EditBlog;
