import styles from './styles/Movies.module.css';
import Card from './components/Card.jsx'

function Movies({ movies }) {
    console.log(movies)

    return (
        <div className={styles.container}>

            {
                movies.map((movie) =>
                    <Card
                        image={movie.posterUrl}
                        id={movie.kinopoiskId}
                    />
                )
            }
        </div>
    )
}

export default Movies;