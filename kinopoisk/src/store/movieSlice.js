import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    value: '',
    status: null,
    error: null
}

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',

    async function () {
        let array = [];
        const response = await
            fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f2ad38e4-47e0-484a-a81e-d05a0e77f1bd',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => {
                    array = data.films;
                });
        return array
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        searchMovies: (value, state) => {
            if (value = '') {
                return state
            }
            else {
                return state.filter(({ nameRu }) => nameRu.toLowerCase().includes(value.toLowerCase()))
            }
        }
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

// export default { searchMovies } = movieSlice.actions
export default movieSlice.reducer
