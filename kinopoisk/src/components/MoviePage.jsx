import styles from './../styles/MoviePage.module.css'
import { useState, useEffect, useParams } from "react";

function MoviePage({ movies }) {

    let { id } = useParams();
    const [year, setYear] = useState('');
    const [genres, setGenres] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const currentCard = movies.filter((n) => n.id == id);
        setYear(currentCard[0].year)
        setGenres(currentCard[0].genres)
        setBackgroundImage(currentCard[0].coverUrl)
        setDescription(currentCard[0].description)
    }, [id])
    return (
        <div className={styles.container}>

            <div>{description}</div>
            <div>12345</div>


            {/* <img src={require('../../images' + image)} className={styles.img} alt="" /> */}
        </div>

    )
}

export default MoviePage;