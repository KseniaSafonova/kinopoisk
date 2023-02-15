import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchMovies } from "./store/movieSlice";
import { useSelector } from 'react-redux';
import './App.css';
import Movies from './Movies';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    console.log(111)
  }, [dispatch])

  const movies = useSelector((state) => state.movies.movies)

  console.log(movies)
  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
