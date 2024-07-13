import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { useSelector } from "react-redux";

const ManinContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    if(!movies) return null

    const singleMovie = movies[0]
  //  console.log(movies);

   const {original_title, overview,id} = singleMovie
  return (
    <div>
     <VideoTitle title={original_title} overview={overview} />
     <VideoBackGround movieId={id}/>
    </div>
  );
};

export default ManinContainer;
