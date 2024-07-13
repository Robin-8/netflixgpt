import { useDispatch } from "react-redux";
import { addPopulate } from "../components/utils/movieSlice";
import { API_URL} from "../components/utils/constonts";
import { useEffect } from "react";

const useTrendingHooks = () => {
  const dispatch = useDispatch();

  const getMovieTrending = async () => {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?page=1`,
      API_URL
    );
    // for dynamic setup we pass that movie id in the url

    const json = await data.json();

    dispatch(addPopulate(json.results));
  };

  useEffect(() => {
    getMovieTrending();
  }, []);
};

export default useTrendingHooks;
