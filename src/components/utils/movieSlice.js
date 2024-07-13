import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies:null,
    movieTrailer:null,
    populate:null,
    topRated:null,
    upComing:null
    
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopulate: (state, action) => {
      state.populate = action.payload;
    },
    addTopRated:(state, action) => {
      state.topRated = action.payload;
    },
    addUpComming: (state, action) => {
      state.upComing = action.payload;
    }
  },
});
export const { addMovie,addTrailer,addPopulate, addTopRated, addUpComming} = movieSlice.actions;
export default movieSlice.reducer;