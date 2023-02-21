import styles from './../styles/MoviePage.module.css'
import { useParams } from 'react-router-dom';

function MoviePage({ movies }) {

    console.log(movies)
    let { id } = useParams();

    const currentMovie = movies.filter((m) => m.filmId == id);
    return (
        <div className={styles.container}>
            <div className={styles.movieDescription}>
                <div className={styles.title}>{currentMovie[0].nameRu}</div>
                <div className={styles.nameOriginal}>{currentMovie[0].nameEn}</div>
                <div className={styles.movieInfo}>
                    <div className={styles.ratingKinopoisk}>{currentMovie[0].rating}&nbsp;</div>
                    <div className={styles.year}>{currentMovie[0].year}&nbsp; </div>
                    <div className={styles.genresBlock}>
                        {
                            currentMovie[0].genres.map((g) => <div>{g.genre}&nbsp;</div>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.mainImage}><img src={currentMovie[0].posterUrl} alt="" /></div>
        </div>
    )
}

export default MoviePage;