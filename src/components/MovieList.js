import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  // console.log(movies);
  return (
    <div className='px-6 bg-black text-white'>
      <h1 className='text-2xl font-bold'>{title}</h1>
       <div className='flex overflow-x-scroll'>
      
      <div className='flex'>
        {movies?.map((movie=> <MovieCard posterPath={movie.poster_path} key={movie.id}/>))}
        
      </div>
    </div>
    </div>
   
  )
}

export default MovieList