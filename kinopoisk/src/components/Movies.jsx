import styles from './../styles/Movies.module.css';
import PageTitle from './PageTitle';
import Filters from './Filters';
import Card from './Card.jsx'

function Movies({ movies }) {
    console.log(movies)
    return (
        <>
            <PageTitle />
            <Filters />
            <div className={styles.container}>
                {
                    movies.map((movie) =>
                        <Card
                            image={movie.posterUrl}
                            id={movie.filmId}
                        />
                    )
                }
            </div>
        </>
    )
}

export default Movies;