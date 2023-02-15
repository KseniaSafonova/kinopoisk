import styles from './styles/Movies.module.css'

function Movies({ movies }) {


    // const fetchMovies = () => {

    //     fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    //         method: 'GET',
    //         headers: {
    //             'X-API-KEY': '3ed264a7-f3f4-4591-88f2-f573b3249c73',
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(res => res.json())
    //         // .then(json => console.log(json))
    //         .then(json => console.log(json.nameRu))
    //         .catch(err => console.log(err))
    // }

    console.log(movies)
    return (
        <div className={styles.container}>

            {/* <div>{movies.nameRu}</div> */}
            {/* {
                    movies.map((n: any) =>
                        <Card
                            image={require('../../images' + n.image)}
                            id={n.id}
                            title={n.title}
                            descriptionShort={n.descriptionShort}
                            date={n.date} />)
                } */}
        </div>
    )
}

export default Movies;