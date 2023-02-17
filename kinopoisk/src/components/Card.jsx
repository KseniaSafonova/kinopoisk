import styles from './../styles/Card.module.css';
import {
    Link
} from "react-router-dom";

function Card(props) {
    return (
        <Link
            to={`${props.id}`}>
            <div className={styles.card}>
                <img src={props.image} alt="" className={styles.cardImage} />
                <div>{props.title}</div>
            </div>
        </Link>

    )
}

export default Card;