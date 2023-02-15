import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchMovies } from "./store/movieSlice";

function Movies() {

    const dispatch = useDispatch();

    // const fetchMovies = () => {

    //     fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    //         method: 'GET',
    //         headers: {
    //             'X-API-KEY': '3ed264a7-f3f4-4591-88f2-f573b3249c73',
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(res => res.json())
    //         // .then(json => console.log(json))
    //         .then(json => console.log(json.nameRu))
    //         .catch(err => console.log(err))
    // }




    useEffect(() => {
        // fetchMovies()
        dispatch(fetchMovies())
    }, [])
    return (
        <></>
    )
}

export default Movies;