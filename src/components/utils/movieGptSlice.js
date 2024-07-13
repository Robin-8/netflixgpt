import { createSlice } from "@reduxjs/toolkit";


const movieGptSlice = createSlice({
    name: "movieSerch",
    initialState: {
        shwoGptSerch:false,
        movieName:null,
        movieResults:null,
    },
    reducers: {
        serachMovieView: (state) => {
            state.shwoGptSerch = !state.shwoGptSerch
        },
        searchMovieResult :(state,action)=>{
            const {movieName,movieResults} = action.payload
            state.movieName = movieName
            state.movieResults = movieResults
        }
    }
})

export const { serachMovieView, searchMovieResult} = movieGptSlice.actions;

export default movieGptSlice.reducer