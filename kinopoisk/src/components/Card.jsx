import styles from './../styles/Card.module.css'
function Card(props) {
    return (
        <div className={styles.card}>
            <div>{props.coverUrl}</div>
            <div>{props.nameRu}</div>
        </div>
    )
}

export default Card;