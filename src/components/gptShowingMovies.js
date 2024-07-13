import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const gptShowingMovies = async () => {
    const gpt = useSelector((store)=>store.serachGpt)
    const {movieResults,movieName}=gpt
    if(!movieName) return null

    return(
        <div className="p-4 m-4 bg-black text-white opacity-90">
            {movieName.map((movie,index)=><MovieList key={movieName} title={movie} movieResults={movieResults[index]}/>)}
        </div>
    )
}
export default gptShowingMovies