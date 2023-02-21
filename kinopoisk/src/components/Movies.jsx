import styles from './../styles/Movies.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import PageTitle from './PageTitle';
import { useState } from 'react';
import Card from './Card.jsx'


function Movies({ movies }) {

    const [pressed, setPressed] = useState(false);
    const [fantasyPressed, fantasySetPressed] = useState(false);
    const [array, setMovies] = useState([])

    const OpenFilters = () => {
        setPressed(!pressed)
    }

    const ShowFantasy = () => {
        fantasySetPressed(true);

        let fantasyArray = Object.assign([], array);
        fantasyArray = []

        movies.map((movie) =>
            movie.genres.find((element) => {
                if (element.genre == 'фэнтези') {
                    fantasyArray.push(movie)
                }
            }
            ))
        setMovies(fantasyArray)
    }

    const ShowAll = () => {
        fantasySetPressed(false);
        setMovies(array)
    }

    return (
        <>
            <PageTitle />
            <section className={styles.filtersContainer}>
                <section className={styles.filtersLeftSection}>
                    <button className={styles.filterButton} onClick={OpenFilters}>Жанры<IoIosArrowDown /></button>
                    {
                        pressed &&
                        <section className={styles.filtersBlock}>
                            <input type='button' value='Все жанры' className={styles.filterItem} onClick={() => { OpenFilters(); ShowAll(); }} />
                            <input type='button' value='Драма' className={styles.filterItem} onClick={OpenFilters} />
                            <input type='button' value='Фентези' className={styles.filterItem} onClick={() => { OpenFilters(); ShowFantasy(); }} />
                            <input type='button' value='Военный' className={styles.filterItem} />
                            <input type='button' value='История' className={styles.filterItem} />
                            <input type='button' value='Приключения' className={styles.filterItem} />
                        </section>
                    }
                    <button className={styles.filterButton}>Рейтинг<IoIosArrowDown /></button>
                    <button className={styles.filterButton}>Годы выхода<IoIosArrowDown /></button>
                </section>
                <section className={styles.filtersRightSection}>
                    <div>Бесплатно</div>
                    <label className={styles.switch}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span className={styles.slider}></span>
                    </label>
                    <button className={styles.filterButton}>Рекомендуемые<IoIosArrowDown /></button>
                </section>
            </section>
            <div className={styles.moviesContainer}>

                {
                    fantasyPressed ?
                        <>
                            {
                                array.map((movie) =>
                                    <Card
                                        image={movie.posterUrl}
                                        id={movie.filmId}
                                    />
                                )
                            }
                        </> :
                        <>
                            {
                                movies.map((movie) =>
                                    <Card
                                        image={movie.posterUrl}
                                        id={movie.filmId}
                                    />
                                )
                            }
                        </>
                }
            </div>
        </>
    )
}

export default Movies;