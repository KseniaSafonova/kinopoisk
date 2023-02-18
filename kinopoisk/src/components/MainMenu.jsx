import { Link } from "react-router-dom";

function MainMenu() {
    return (
        <>
            <Link to='/movies'><button>Фильмы</button></Link>
            <button>Сериалы</button>
            <button>Мультфильмы</button>
            <button>Фитнес</button>
            <button>Природа</button>
            <button>Лекции</button>
            <button>Кулинария</button>
            <button>Программы</button>
        </>
    )
}

export default MainMenu;