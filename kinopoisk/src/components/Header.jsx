import styles from './../styles/Header.module.css';
import { BiSearch } from 'react-icons/bi';
import { FiGift } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header({ movies }) {

    const [pressed, setPressed] = useState(false);
    const [openedMenu, setOpenedMenu] = useState(false);
    const [value, setValue] = useState('');

    const OpenMenu = () => {
        setOpenedMenu(!openedMenu);
        document.body.style.position = 'fixed';
        document.body.style.overflow = 'hidden';
    }

    return (
        <header className={styles.header}>
            <div className={styles.leftBlock}>
                <div>LOGO</div>
                {
                    pressed ?
                        <>
                            <div className={styles.searchActive}>
                                <input
                                    placeholder='Название фильма, сериала'
                                    value={value}
                                    onChange={(event) => setValue(event.target.value)}
                                />
                                <AiOutlineClose className={styles.closeInput} onClick={() => setPressed(!pressed)} />
                            </div>

                        </>
                        :
                        <nav className={styles.nav}>
                            <Link to='/'>Главная</Link>
                            <a href='#'>Каталог</a>
                            <a href='#'>Магазин</a>
                            <a href='#'>Спорт</a>
                            <a href='#'>ТВ каналы</a>
                        </nav>
                }
            </div>
            {
                openedMenu ?
                    <div>

                        <ul className={styles.mobileMenu}>
                            <div className={styles.topBlock}>
                                <div>LOGO</div>
                                <div><AiOutlineClose className={styles.mobileMenuClose} onClick={OpenMenu} size='1.5em' /></div>
                            </div>
                            <li><input type='button' class="menu__item" value='ГЛАВНАЯ' /></li>
                            <li><input type='button' class="menu__item" value='КАТАЛОГ' /></li>
                            <li><input type='button' class="menu__item" value='МАГАЗИН' /></li>
                            <li><input type='button' class="menu__item" value='СПОРТ' /></li>
                            <li><input type='button' class="menu__item" value='ТВ КАНАЛЫ' /></li>
                            <li><input type='button' class="menu__item" value='ВВЕСТИ ПРОМОКОД' /></li>
                            <li><input type='button' class="menu__item" value='ВОЙТИ' /></li>
                        </ul>
                    </div>
                    :
                    <div className={styles.rightBlock}>
                        <div className={styles.search}>
                            <BiSearch size='1.5em' className={styles.search} onClick={() => setPressed(!pressed)} />
                        </div>
                        <button className={styles.headerButton}>Месяц за 1Р</button>
                        <div className={styles.addPromo}>
                            <FiGift size='1.5em' />
                            <span>Ввести промокод</span>
                        </div>
                        <div className={styles.LogIn}>
                            <BiUserCircle size='1.5em' />
                            <span>Войти</span>
                        </div>
                        <div className={styles.hamburgerMenu} onClick={OpenMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
            }
        </header >
    )
}

export default Header;