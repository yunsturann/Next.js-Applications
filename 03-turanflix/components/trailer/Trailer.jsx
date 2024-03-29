"use client";

import { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import PlaylistCard from "./PlaylistCard";

const Trailer = ({ video, playlistImg }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let videoId = video[activeIndex];

  useEffect(() => {
    // set index after checking all of videos if includes Trailer
    let index = video.findIndex((vid) => vid.name.includes("Official Trailer"));
    if (index !== -1) {
      setActiveIndex(index);
    } else {
      index = video.findIndex((vid) => vid.type.includes("Trailer"));
      if (index !== -1) {
        setActiveIndex(index);
      }
    }
  }, []);

  return (
    <div id="trailer" className="grid grid-cols-3 gap-6 ">
      <div className="col-span-3 lg:col-span-2">
        <LiteYouTubeEmbed
          id={videoId.key}
          noCookie={true} // Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
          title="YouTube Embed" // always provide a title. Help the web be accessible ;)
        />
      </div>

      {/*Playlist Container */}

      <section className="col-span-3 lg:col-span-1 space-y-4 ">
        <h2 className="text-2xl font-bold text-white ">More Videos</h2>
        <div className="flex flex-col h-80 xl:h-96 2xl:h-[26rem] overflow-y-auto gap-2  border rounded-md border-gray-400 ">
          {video.map((vid, index) => (
            <PlaylistCard
              key={vid.id}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              name={vid.name}
              type={vid.type}
              playlistImg={playlistImg}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Trailer;
