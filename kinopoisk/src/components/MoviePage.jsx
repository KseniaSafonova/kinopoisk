
import { useState, useEffect, useParams } from "react";

function MoviePage({ movies }) {

    let { id } = useParams();
    // const [date, setDate] = useState('');
    // const [title, setTitle] = useState('');
    // const [image, setImage] = useState('');
    // const [description, setDescription] = useState([]);

    useEffect(() => {
        const currentCard = movies.filter((n) => n.id == id);
        // setDate(currentCard[0].date)
        // setTitle(currentCard[0].title)
        // setImage(currentCard[0].bigImage)
        // setDescription(currentCard[0].description)
    }, [id])
    return (
        <div>
            111
            <div>
                111222222222222222222222222222222222222222222222222
            </div>
        </div>
    )
}

export default MoviePage;