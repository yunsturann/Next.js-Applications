import Image from "next/image";

const PlaylistCard = ({
  name,
  type,
  playlistImg,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <article
      className={`flex items-start gap-2 hover:bg-rose-500/70 p-2 cursor-pointer transition ${
        index === activeIndex && "bg-rose-500/70 "
      }`}
      onClick={() => setActiveIndex(index)}
    >
      <p className="text-xs self-center">{index}</p>
      <Image
        unoptimized
        src={`https://image.tmdb.org/t/p/original/${playlistImg}`}
        alt="playlist-img"
        height={100}
        width={120}
        className="rounded-lg"
      />

      <div className="basis-2/3 space-y-1">
        <h3 className="text-base  line-clamp-2 leading-5">{name}</h3>
        <p className="text-sm opacity-80 line-clamp-1">{type}</p>
      </div>
    </article>
  );
};

export default PlaylistCard;
