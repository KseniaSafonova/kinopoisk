import styles from './styles/Movies.module.css';
import SocialNetworks from './components/SocialNetworks';
import Filters from './components/Filters';
import Card from './components/Card.jsx'

function Movies({ movies }) {
    console.log(movies)

    return (
        <>
            <SocialNetworks />
            <Filters />
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
        </>
    )
}

export default Movies;