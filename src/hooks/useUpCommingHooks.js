import { useDispatch } from "react-redux";
import { API_URL } from "../components/utils/constonts";
import { useEffect } from "react";
import { addUpComming } from "../components/utils/movieSlice";

const useUpCommingHooks = () => {
    const dispatch = useDispatch()
  const getUpComming = async () => {
    const data = await fetch(
      `
       https://api.themoviedb.org/3/movie/upcoming?page=1`,
      API_URL
    );
    const json = await data.json();
    dispatch(addUpComming(json.results));
  };
  useEffect(()=>{
    getUpComming()
  })
};
export default useUpCommingHooks;
