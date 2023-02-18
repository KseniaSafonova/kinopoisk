import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    // movies: [{ 1: '111' }, { 2: '222' }, { 3: '333' }],
    movies: [],
    status: null,
    error: null
}

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',

    async function () {
        let array = [];
        for (let id = 300; id < 321; id++) {

            const response = await
                fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': 'f2ad38e4-47e0-484a-a81e-d05a0e77f1bd',
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        array.push(data);
                    });

            if (array.length >= 15) {
                return array
            }
        }
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
