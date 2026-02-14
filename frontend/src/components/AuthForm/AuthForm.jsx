import React, {useState} from "react";
import style from "./AuthForm.module.css";
import {useTranslation} from "react-i18next";

function AuthForm() {
    const [active, setActive] = useState(false);
    const { t } = useTranslation();

    return (
        <div className={style.authWrapper}>
            <div className={`${style.container} ${active ? style.active : ""}`}>

                <div className={`${style.formBox} ${style.login}`}>
                    <form>
                        <h1 className={style.titan}>{t("auth.loginForm.login")}</h1>

                        <div className={style.inputBox}>
                            <input type="text" placeholder={t("auth.placeholders.username")} required/>
                            <i className="bx bxs-user"></i>
                        </div>

                        <div className={style.inputBox}>
                            <input type="password" placeholder={t("auth.placeholders.password")}  required/>
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <div className={style.forgotLink}>
                            <a href="#" className={style.forgotPassword}>
                                {t("auth.loginForm.forgot")}
                            </a>
                        </div>

                        <button type="submit" className={style.btn}>
                            {t("auth.loginForm.login")}
                        </button>

                        <p className={style.formText}>
                            {t("auth.loginForm.socialMedia")}
                        </p>

                        <div className={style.socialIcons}>
                            <a href="#"><i className="bx bxl-google"></i></a>
                            <a href="#"><i className="bx bxl-facebook"></i></a>
                            <a href="#"><i className="bx bxl-instagram-alt"></i></a>
                            <a href="#"><i className="bx bxl-gmail"></i></a>
                        </div>
                    </form>
                </div>

                <div className={`${style.formBox} ${style.register}`}>
                    <form>
                        <h1 className={style.titan}>
                            {t("auth.registrationForm.registration")}
                        </h1>

                        <div className={style.inputBox}>
                            <input type="text" placeholder={t("auth.placeholders.username")} required/>
                            <i className="bx bxs-user"></i>
                        </div>

                        <div className={style.inputBox}>
                            <input type="email" placeholder={t("auth.placeholders.email")} required/>
                            <i className="bx bxs-envelope-open bx-flip-horizontal"></i>
                        </div>

                        <div className={style.inputBox}>
                            <input type="password" placeholder={t("auth.placeholders.password")} required/>
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <button type="submit" className={style.btn}>
                            {t("auth.registrationForm.register")}
                        </button>

                        <p className={style.formText}>
                            {t("auth.registrationForm.socialMedia")}
                        </p>

                        <div className={style.socialIcons}>
                            <a href="#"><i className="bx bxl-google"></i></a>
                            <a href="#"><i className="bx bxl-facebook"></i></a>
                            <a href="#"><i className="bx bxl-instagram-alt"></i></a>
                            <a href="#"><i className="bx bxl-gmail"></i></a>
                        </div>
                    </form>
                </div>

                <div className={style.toggleBox}>
                    <div className={`${style.togglePanel} ${style.toggleLeft} ${active ? style.activeToggleLeft : ''}`}>
                        <h1 className={style.titan}>
                            {t("auth.loginForm.welcome")}
                        </h1>
                        <p>{t("auth.loginForm.question")}</p>
                        <button
                            className={style.btnToggle}
                            onClick={() => setActive(true)}
                        >
                            {t("auth.loginForm.register")}
                        </button>
                    </div>

                    <div className={`${style.togglePanel} ${style.toggleRight} ${active ? style.activeToggleRight : ''}`}>
                        <h1 className={style.titan}>
                            {t("auth.registrationForm.welcomeBack")}
                        </h1>
                        <p>{t("auth.registrationForm.question")}</p>
                        <button
                            className={style.btnToggle}
                            onClick={() => setActive(false)}
                        >
                            {t("auth.loginForm.login")}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AuthForm;
