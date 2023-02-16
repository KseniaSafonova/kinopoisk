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
                        'X-API-KEY': '3ed264a7-f3f4-4591-88f2-f573b3249c73',
                        'Content-Type': 'application/json',
                    },
                })
                    // .then(res => res.json())
                    // .then(json => console.log(json))
                    // // .then(json => array.push(json))
                    // // .then(json => console.log(json.nameRu))
                    // .catch(err => console.log(err))
                    .then(res => { return res.json() })
                    .then(data => {
                        array.push(data);
                    });

            if (array.length >= 15) {
                // console.log(array)
                return array
            }


            // return array
            // const data = response.json();
            // return data;
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
