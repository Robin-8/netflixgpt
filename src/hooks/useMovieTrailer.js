import { API_URL } from "../components/utils/constonts";
import { useDispatch } from "react-redux";
import { addTrailer } from "../components/utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_URL
    );
    // for dynamic setup we pass that movie id in the url

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailer(trailer));
    // two way we can archieve this trailer dynamically one using state and one redux store here is redux using
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};
export default useMovieTrailer;
