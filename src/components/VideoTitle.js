import React from "react";

const VideoTitle = ({title,overview}) => {
  return (
    <div className="m-14 absolute py-36 text-white pt-36 ">
      <h1 className="font-bold text-4xl ">{title}</h1>
      <h3 className="text-1xl font-semibold py-4 w-1/3">{overview}</h3>
      <div>
        <button className="bg-white text-black font-semibold p-3 px-12  mr-2 rounded-lg hover:bg-white-600">Play</button>
        <button className="bg-gray-500 text-white font-semibold p-3 px-10 opacity-50 rounded-lg ">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
