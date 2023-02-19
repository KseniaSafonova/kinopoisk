import styles from './../styles/MoviePage.module.css'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function MoviePage({ movies }) {

    console.log(movies)

    let { id } = useParams();
    // const [year, setYear] = useState('');
    // const [genres, setGenres] = useState([]);
    // const [backgroundImage, setBackgroundImage] = useState('');
    // const [description, setDescription] = useState('');

    useEffect(() => {
        const currentMovie = movies.filter((n) => n.id == id);
        console.log(currentMovie)
        // setYear(currentCard[0].year)
        // setGenres(currentCard[0].genres)
        // setBackgroundImage(currentCard[0].coverUrl)
        // setDescription(currentCard[0].description)
    }, [id])
    return (
        <div className={styles.container}>
            {/* <div>{year}</div> */}
            {/* <div className={styles.genres}>
                {
                    genres.map((g) => <div>{g}</div>)
                }
            </div> */}
            {/* <div>{description}</div> */}
            <div>Инфо о фильме id:{id}</div>
        </div>

    )
}

export default MoviePage;