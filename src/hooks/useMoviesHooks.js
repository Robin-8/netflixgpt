import { API_URL } from "../components/utils/constonts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addMovie } from "../components/utils/movieSlice";

const useMoviesHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieFromApi = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          API_URL
        );
        const data = await response.json();
        dispatch(addMovie(data.results));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    getMovieFromApi();
  }, [dispatch]);
};

export default useMoviesHook;

// const useMoviesHook = async () => {
//   const dispatch = useDispatch();
//   const getMovieFromApi = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
//       API_URL
//     );
//     const json = await data.json();
//     console.log(json.results);
//     dispatch(addMovie(json.results));
//   };

//   useEffect(() => {
//     getMovieFromApi();
//   },[]);
// };

// export default useMoviesHook;
