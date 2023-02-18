import styles from './../styles/MoviePage.module.css'
import { useState, useEffect, useParams } from "react";

function MoviePage({ movies }) {

    let { id } = useParams();
    // const [title, setTitle] = useState('');
    // const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const currentCard = movies.filter((n) => n.id == id);
        // setDate(currentCard[0].date)
        // setTitle(currentCard[0].title)
        // setImage(currentCard[0].bigImage)
        setDescription(currentCard[0].description)
    }, [id])
    return (
        <div className={styles.container}>

            <div>{description}</div>


            {/* <img src={require('../../images' + image)} className={styles.img} alt="" /> */}
        </div>

    )
}

export default MoviePage;