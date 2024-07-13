import React, {useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "./utils/languageConstonts";
import openai from "./utils/openai";
import { API_URL} from '../components/utils/constonts'
import { searchMovieResult } from "./utils/movieGptSlice";

const SearchBar = () => {
  const language = useSelector((store) => store.language.lang);

  const serachText = useRef(null)
  const dispatch = useDispatch();

  // function for call tmdb serach moveie
  const gtpSerchMovies = async (movie) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${API_URL}`);
    const movies = await response.json();
    return movies.results
  };

 
  const handileSerach = async() => {
    console.log(serachText.current.value);
    const gptQuery = 'act like a movie recommandation system and suggest some movie for the query' + serachText.current.value + "only give the name of the five movies and comma seperated like the example result given ahead.Example is: don,shoely,king of kotha,garudan,cid moosa"
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion.choices?.[0]?.message.content);
  // this will give arrray  movvies like [ 'don', 'sholey', 'king of kotha', 'garudan', 'cid moosa' ]
    const gptMovies = chatCompletion.choices?.[0]?.message.content.split(",");

    const promiseArray = gptMovies.map((movie)=>gtpSerchMovies(movie))
    const tmdbResults = await Promise.all(promiseArray)
    console.log(tmdbResults);
    dispatch(searchMovieResult({movieName:gptMovies,movieResults:tmdbResults}))
  }
  return (
    <div className="pt-[15%]  justify-center flex">
      <form className="bg-black w-1/2 items-center grid grid-cols-12 p-5 " onSubmit={(e) => e.preventDefault()}>
        <input
        ref={serachText}
          type="text"
          placeholder={lang[language].gptPlaceHolder}
          className="ml-2 p-3 col-span-9"
        />
        <button className="py-2  px-4 bg-red-700 text-whtie  ml-2 col-span-3"onClick={handileSerach}>
          
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
