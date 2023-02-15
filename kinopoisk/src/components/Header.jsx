import styles from './../styles/Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.leftBlock}>
                <div>logo</div>
                <nav className={styles.nav}>
                    <a href='#'>Главная</a>
                    <a href='#'>Каталог</a>
                    <a href='#'>Магазин</a>
                    <a href='#'>Спорт</a>
                    <a href='#'>ТВ каналы</a>
                </nav>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.search}>Поиск</div>
                <button className={styles.headerButton}>Месяц за 1Р</button>
                <div className={styles.addPromo}>Ввести промокод</div>
                <div className={styles.LogIn}>Войти</div>
            </div>
        </header>
    )
}

export default Header;