import Image from "next/image";
import avatar from "@/public/images/avatar.png";

const Review = ({ reviews }) => {
  if (reviews.length === 0) return <></>;

  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-wider uppercase">
        Reviews
      </h2>
      <div className="flex flex-col gap-5 sm:gap-10 mt-8 sm:mt-10">
        {reviews.map((review, index) => (
          <article
            key={review.id}
            className="flex max-sm:flex-col gap-4 items-start"
          >
            {/*Author avatar*/}
            <div className="h-24 w-24 relative rounded-full ">
              <Image
                src={
                  review.author_details.avatar_path !== null
                    ? `https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`
                    : avatar
                }
                alt="author"
                title="author-avatar"
                fill
                className="rounded-full "
              />
            </div>
            {/*Author content*/}
            <div className="flex-1 ">
              <h3 className="text-lg sm:text-xl font-bold text-rose-400">
                {review.author}{" "}
                {review.author_details.rating && (
                  <span className="bg-amber-800 text-white p-1 self-end w-full rounded-xl text-xs sm:text-sm ml-4">
                    rating: {review.author_details.rating}
                  </span>
                )}
              </h3>
              <p className="text-sm italic text-gray-400 ">
                created at: {formatTimestamp(review.created_at)}
                {review.created_at !== review.updated_at && (
                  <span className="ml-4">
                    edited at: {formatTimestamp(review.updated_at)}
                  </span>
                )}
              </p>
              <div className="max-h-52 overflow-y-auto mt-1">
                <p className="text-sm sm:text-base">{review.content}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Review;
