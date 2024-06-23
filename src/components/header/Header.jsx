import React from 'react';
import {Link} from "react-router-dom";
import style from './Header.module.scss'
import logoutIcon from '/src/assets/icons/logout-icon.svg';
import logo from '/src/assets/icons/Logo.svg';


const Header = () => {
    return (
        <header className={style.header}>
            <a href="/">
                <img src={logo} alt="QAZAQ STROY"/>
            </a>
            <button className={style.logoutButton}>
                <Link to="/" className={style.link}>
                    <img src={logoutIcon} alt="Logout Icon"/>
                    Выйти
                </Link>
            </button>
        </header>
    );
};

export default Header;