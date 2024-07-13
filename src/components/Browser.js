import useMoviesHook from "../hooks/useMoviesHooks";
import Header from "./Header";
import ManinContainer from "./ManinContainer";
import SecondContainer from "./SecondContainer";
import useTrendingHooks from "../hooks/useTrendingHooks";
import useTopRatedHooks from "../hooks/useTopRatedHooks";
import useUpCommingHooks from "../hooks/useUpCommingHooks";
import SearchPage from "./SearchPage";
import { useSelector } from "react-redux";

const Browser = () => {
  const movieSerach = useSelector((store) => store.serachGpt.shwoGptSerch);

  useMoviesHook();
  useTrendingHooks();
  useTopRatedHooks();
  useUpCommingHooks();

  return (
    <div>
      <Header />
      {movieSerach ? (
        <SearchPage />
      ) : (
        <>
  
  
          <ManinContainer />
          <SecondContainer />
        </>
      )}

      <div></div>
    </div>
  );
};

export default Browser;
