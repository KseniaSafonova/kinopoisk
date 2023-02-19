import styles from './../styles/MoviePage.module.css'
// import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function MoviePage({ movies }) {

    let { id } = useParams();

    const currentMovie = movies.filter((m) => m.kinopoiskId == id);

    // const [year, setYear] = useState('');
    // const [genres, setGenres] = useState([]);
    // const [backgroundImage, setBackgroundImage] = useState('');
    // const [description, setDescription] = useState('');

    // useEffect(() => {
    //     setYear(currentMovie[0].year)
    //     setGenres(currentMovie[0].genres)
    //     setBackgroundImage(currentMovie[0].coverUrl)
    //     setDescription(currentMovie[0].description)
    // }, [id])
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}><img src={currentMovie[0].coverUrl} alt="" /></div>
            <div className={styles.year}>{currentMovie[0].year}</div>
            {/* <div className={styles.genres}>
                {
                    currentMovie[0].genres.map((g) => <div>{g}</div>)
                }
            </div> */}
            <div className={styles.description}>{currentMovie[0].description}</div>
        </div>

    )
}

export default MoviePage;