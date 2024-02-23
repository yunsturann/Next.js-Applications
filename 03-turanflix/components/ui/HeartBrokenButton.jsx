"use client";

import { deleteFromFavorites } from "@/app/actions/actions";
import { FaHeartBroken } from "react-icons/fa";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const RemoveButton = () => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 w-full text-lg bg-gray-900 hover:bg-black p-1.5 rounded-md transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
      disabled={status.pending}
    >
      <FaHeartBroken color="red" />
      {status.pending ? "Removing" : "Remove"}
    </button>
  );
};

const HeartBrokenButton = ({ movieId }) => {
  // useFormState is required for error handling
  const [state, formAction] = useFormState(deleteFromFavorites, undefined);

  useEffect(() => {
    if (state?.success) {
      toast.success("Movie removed from favorites");
    } else if (state?.error) {
      toast.error(state?.error);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="movieId" value={movieId} />
      <RemoveButton />
    </form>
  );
};

export default HeartBrokenButton;
