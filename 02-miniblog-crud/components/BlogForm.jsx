"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const BlogForm = ({ _title = "", _content = "", _method, url }) => {
  //const EDITMODE = _method === "POST" ? false : true;
  const [title, setTitle] = useState(_title);
  const [content, setContent] = useState(_content);

  const router = useRouter();
  const myRef = useRef();

  // in order to focus textarea
  useEffect(() => {
    const inputElement = myRef.current;
    inputElement.focus();
    // to focus end of the text
    const textLen = inputElement.value.length;
    inputElement.setSelectionRange(textLen, textLen);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(url, {
        method: _method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: title.trim(), content: content.trim() }),
      });
      if (!res.ok) {
        toast.error(res.statusMessage);
        throw new Error(res.statusMessage);
      } else {
        const data = await res.json();
        router.push("/");
        router.refresh();
        toast.success(data.message, {
          draggable: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      className="w-full lg:w-3/4 mx-auto text-neutral-700 flex flex-col gap-3 sm:gap-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="outline-none text-lg sm:text-xl p-4 rounded-md"
        required
        value={title}
        ref={myRef}
        onChange={(e) => setTitle(e.target.value)}
        tabIndex={"1"}
      />
      <textarea
        name="content"
        placeholder="Content"
        className="outline-none text-base sm:text-lg resize-none p-4 h-[400px] rounded-md"
        maxLength={800}
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
        tabIndex={"2"}
      />
      <button
        type="submit"
        className="bg-blue-accent hover:bg-blue-accent-hover text-default-text font-semibold tracking-wider text-base sm:text-lg p-2 sm:p-4 rounded-xl"
        tabIndex={"3"}
      >
        {_method === "POST" ? "ADD BLOG" : "UPDATE BLOG"}
      </button>
    </form>
  );
};

export default BlogForm;
