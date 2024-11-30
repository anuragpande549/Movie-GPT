import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movieList",
    initialState: {
        nowPlaying: {}
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlaying = action.payload;
        }
    }
})

export const { addMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
