import React from "react";
import "../styles/Videos.css";
import VideoCard from "./VideoCard.js";
import { useEffect } from "react";

const Videos = ({ videos }) => {
  useEffect(() => console.log(videos), []);
  return (
    <div className="Videos">
      {videos.map((item, index) => (
        <VideoCard
          image={item.image}
          name={item.name}
          key={item.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default Videos;
