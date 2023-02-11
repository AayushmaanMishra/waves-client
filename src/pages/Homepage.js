import React from "react";
import video from "../assets/videos/video.mp4";

export default function Homepage() {
  return (
    <div className="w-full h-screen relative">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={video} type="video/mp4" />
      </video>
      <div className="bg-[rgba(0,0,0,0.47)] absolute w-full h-full top-0 left-0"></div>
      <div className="absolute top-0 h-full flex flex-col pl-5 pt-[12%]">
        <p className="uppercase text-6xl text-pink-500 font-bold my-3">waves</p>
        <p className="uppercase text-6xl text-pink-500 font-bold my-3">women</p>
        <p className="uppercase text-6xl text-pink-500 font-bold my-3">
          empowerment
        </p>
      </div>
    </div>
  );
}
