import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchMovies } from "./store/movieSlice";
import { useSelector } from 'react-redux';
import styles from './App.module.css';
import Movies from './Movies';
import Header from "./components/Header";
import SocialNetworks from './components/SocialNetworks';
import Filters from './components/Filters';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MoviePage from "./components/MoviePage";

function App() {
  const movies = useSelector((state) => state.movies.movies)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  console.log(movies)

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <SocialNetworks />
        <Filters />
        <Movies movies={movies} />
        <Routes>
          <Route path='/moviepage/:id' element={<MoviePage movies={movies} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
