import styles from './../styles/Filters.module.css'
import { IoIosArrowDown } from 'react-icons/io'

function Filters() {
    return (
        <section className={styles.filtersContainer}>
            <section className={styles.filtersLeftSection}>
                <button className={styles.filterButton}>Жанры<IoIosArrowDown /></button>
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