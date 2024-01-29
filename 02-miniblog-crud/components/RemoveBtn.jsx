"use client";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const handleRemove = async () => {
    if (!confirm("Are you sure to remove?")) return;

    try {
      const res = await fetch(`/api/blogs?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const data = await res.json();
        router.refresh();
        toast.info(data.message);
      } else {
        throw new Error(res.statusMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="text-red-500 cursor-pointer hover:opacity-80"
      onClick={handleRemove}
    >
      <FaTrashAlt size={24} />
    </button>
  );
};

export default RemoveBtn;
