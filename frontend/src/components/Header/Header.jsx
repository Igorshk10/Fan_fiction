import React, {useContext} from 'react'
import style from './header.module.css';
import { useTranslation } from "react-i18next";
import {ThemeContext} from "../../context/ThemeContext";
import {LanguageContext} from "../../context/LanguageContext";
import {Link} from "react-router-dom";

function Header() {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { lang, toggleLanguage } = useContext(LanguageContext);

    return (
        <header className={style.header}>
            <h2 className={style.logo}>
                FanFic
            <span className={style.accent}>AI</span>
            </h2>
            <hr/>
            <Link className={style.link} to='/'>{t("home")}</Link>
            <Link className={style.link} to='/fanfics'>{t("fanfics")}</Link>
            <div className={style.settings}>
                <button onClick={toggleLanguage}>{lang.toUpperCase()}</button>
                <hr/>
                <button onClick={toggleTheme}>
                    {theme == 'light' ? <i className='bx bx-sun'></i> : <i className='bx bx-moon'></i>}
                </button>
            </div>
            <button className={style.menu}><i className='bx bx-menu'></i></button>
        </header>
    )
}

export default Header
