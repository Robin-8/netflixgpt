import React from 'react';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const SecondContainer = () => {
  // Correctly access the 'movie' state from the store
  const movies = useSelector(store => store.movies);

  return movies.nowPlayingMovies && ( // Check for the existence of nowPlayingMovies
    <div className='bg-black'>
      <div className='-mt-36 relative z-10'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Upcomming"} movies={movies.upComing} />
        <MovieList title={"Popular"} movies={movies.populate} />
       
        <MovieCard />
      </div>
    </div>
  );
};

export default SecondContainer;
