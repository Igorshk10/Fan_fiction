import React, {useState} from "react";
import style from "./AuthForm.module.css";
import {useTranslation} from "react-i18next";
import MyInput from "../../UI/MyInput/MyInput";

function AuthForm() {
    const [active, setActive] = useState(false);
    const { t } = useTranslation();

    return (
        <div className={style.authWrapper}>
            <div className={`${style.container} ${active ? style.active : ""}`}>

                <div className={`${style.formBox} ${style.login}`}>
                    <form>
                        <h1 className={style.bold}>{t("auth.loginForm.login")}</h1>

                        <MyInput  type="text"
                                  placeholder={t("auth.placeholders.username")}
                                  required={true}
                                  icon={<i className="bx bxs-user"></i>} />

                        <MyInput  type="password"
                                  placeholder={t("auth.placeholders.password")}
                                  required={true}
                                  icon={<i className="bx bxs-lock-alt"></i>} />

                        <div className={style.forgotLink}>
                            <a href="#" className={style.forgotPassword}>
                                {t("auth.loginForm.forgot")}
                            </a>
                        </div>

                        <button type="submit" className={style.btn}>
                            {t("auth.loginForm.login")}
                        </button>
                    </form>
                </div>

                <div className={`${style.formBox} ${style.register}`}>
                    <form>
                        <h1 className={style.bold}>
                            {t("auth.registrationForm.registration")}
                        </h1>

                        <MyInput  type="text"
                                  placeholder={t("auth.placeholders.username")}
                                  required={true}
                                  icon={<i className="bx bxs-user"></i>} />

                        <MyInput  type="email"
                                  placeholder={t("auth.placeholders.email")}
                                  required={true}
                                  icon={<i className="bx bxs-envelope-open bx-flip-horizontal"></i>} />

                        <MyInput  type="password"
                                  placeholder={t("auth.placeholders.password")}
                                  required={true}
                                  icon={<i className="bx bxs-lock-alt"></i>} />

                        <button type="submit" className={style.btn}>
                            {t("auth.registrationForm.register")}
                        </button>
                    </form>
                </div>

                <div className={style.toggleBox}>
                    <div className={`${style.togglePanel} ${style.toggleLeft} ${active ? style.activeToggleLeft : ''}`}>
                        <h1 className={style.bold}>
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
                        <h1 className={style.bold}>
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
