import styles from './styles/Movies.module.css';
import Card from './components/Card.jsx'

function Movies({ movies }) {

    return (
        <div className={styles.container}>

            {
                movies.map((movie) =>
                    <Card
                        image={movie.image}
                        id={movie.id}
                        title={movie.title} />)
            }
        </div>
    )
}

export default Movies;