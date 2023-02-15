import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchMovies } from "./store/movieSlice";
import { useSelector } from 'react-redux';
import styles from './App.module.css';
import Movies from './Movies';
import Header from "./components/Header";
import SocialNetworks from './components/SocialNetworks';
import Filters from './components/Filters'

function App() {
  const movies = useSelector((state) => state.movies.movies)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  return (
    <div className={styles.app}>
      <Header />
      <SocialNetworks />
      <Filters />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
