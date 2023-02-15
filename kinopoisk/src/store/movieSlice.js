import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: {},
    status: null,
    error: null
}

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async function () {
        const response = await
            fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
                method: 'GET',
                headers: {
                    'X-API-KEY': '3ed264a7-f3f4-4591-88f2-f573b3249c73',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(json => console.log(json))
                .catch(err => console.log(err))

        const data = response.json();
        return data;
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.movies = action.payload;
        },
        [fetchMovies.rejected]: (state, action) => { }
    }
})

export default movieSlice.reducer
