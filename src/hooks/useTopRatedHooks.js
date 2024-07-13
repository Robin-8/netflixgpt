import { useDispatch } from "react-redux";
import { API_URL } from "../components/utils/constonts";
import { addTopRated } from "../components/utils/movieSlice";
import { useEffect } from "react";



const useTopRatedHooks = () => {
    const dispatch = useDispatch();
  
    const getTopRated = async () => {
      const data = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?page=1`,
        API_URL
      );
      // for dynamic setup we pass that movie id in the url
  
      const json = await data.json();
  
      dispatch(addTopRated(json.results));
    };
  
    useEffect(() => {
        getTopRated();
    }, []);
}
export default useTopRatedHooks