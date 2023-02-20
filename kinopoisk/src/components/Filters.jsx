import styles from './../styles/Filters.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react';

function Filters({ movies }) {

    const [pressed, setPressed] = useState(false);

    const OpenFilters = () => {
        setPressed(!pressed)
    }

    const showFantasy = () => {
        let fantasyArray = []
        movies.map((movie) =>
            movie.genres.find((element) => {
                if (element.genre == 'фэнтези') {
                    fantasyArray.push(movie)
                }
            }
            ))

        console.log(fantasyArray)

    }
    return (
        <section className={styles.filtersContainer}>
            <section className={styles.filtersLeftSection}>
                <button className={styles.filterButton} onClick={OpenFilters}>Жанры<IoIosArrowDown /></button>
                {
                    pressed ?
                        <section className={styles.filtersBlock}>
                            <input type='button' value='Драма' />
                            <input type='button' value='Фентези' onClick={showFantasy} />
                            <input type='button' value='Военный' />
                            <input type='button' value='История' />
                            <input type='button' value='Приключения' />
                            <input type='button' value='Триллер' />
                            <input type='button' value='Детектив' />
                            <input type='button' value='Боевик' />
                        </section>
                        :
                        ''
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
    )
}

export default Filters;