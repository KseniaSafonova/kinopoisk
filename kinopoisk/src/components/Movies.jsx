import styles from './../styles/Movies.module.css';
import SocialNetworks from './SocialNetworks';
import Filters from './Filters';
import Card from './Card.jsx'

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