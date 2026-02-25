import React, {useState} from "react";
import style from "./AuthForm.module.css";
import {useTranslation} from "react-i18next";
import MyInput from "../../UI/MyInput/MyInput";
import toast from "react-hot-toast";

function AuthForm() {
    const [active, setActive] = useState(false);
    const { t } = useTranslation();

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");


    const handleLoginSubmit = (e) => {
        e.preventDefault();

        if (!loginUsername || !loginPassword) {
            console.log("All fields are required");
            toast.error("All fields are required");
            return;
        }

        const userData = {
            username: loginUsername,
            password: loginPassword
        };

        toast.success("Login successful!");
        console.log("Login:", userData);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (!registerUsername || !registerEmail || !registerPassword) {
            console.log("All fields are required");
            toast.error("All fields are required");
            return;
        }

        const userData = {
            username: registerUsername,
            email: registerEmail,
            password: registerPassword
        };

        toast.success("Registration successful!");
        console.log("Register:", userData);
    };

    return (
        <div className={style.authWrapper}>
            <div className={`${style.container} ${active ? style.active : ""}`}>

                <div className={`${style.formBox} ${style.login}`}>
                    <form>
                        <h1 className={style.bold}>{t("auth.loginForm.login")}</h1>

                        <MyInput
                            type="text"
                            placeholder={t("auth.placeholders.username")}
                            required
                            icon={<i className="bx bxs-user"></i>}
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                        />

                        <MyInput
                            type="password"
                            placeholder={t("auth.placeholders.password")}
                            required
                            icon={<i className="bx bxs-lock-alt"></i>}
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />

                        <div className={style.forgotLink}>
                            <a href="#" className={style.forgotPassword}>
                                {t("auth.loginForm.forgot")}
                            </a>
                        </div>

                        <button type="submit" className={style.btn} onClick={handleLoginSubmit}>
                            {t("auth.loginForm.login")}
                        </button>

                        <p className={style.formText}>
                            {t("auth.loginForm.socialMedia")}
                        </p>

                        <button type="submit" className={style.btn}>
                          <i className="bx bxl-google"></i> {t("auth.loginForm.google")}
                        </button>
                    </form>
                </div>

                <div className={`${style.formBox} ${style.register}`}>
                    <form>
                        <h1 className={style.bold}>
                            {t("auth.registrationForm.registration")}
                        </h1>

                        <MyInput
                            type="text"
                            placeholder={t("auth.placeholders.username")}
                            required
                            icon={<i className="bx bxs-user"></i>}
                            value={registerUsername}
                            onChange={(e) => setRegisterUsername(e.target.value)}
                        />

                        <MyInput
                            type="email"
                            placeholder={t("auth.placeholders.email")}
                            required
                            icon={<i className="bx bxs-envelope-open bx-flip-horizontal"></i>}
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />

                        <MyInput
                            type="password"
                            placeholder={t("auth.placeholders.password")}
                            required
                            icon={<i className="bx bxs-lock-alt"></i>}
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                        />

                        <button type="submit" className={style.btn} onClick={handleRegisterSubmit}>
                            {t("auth.registrationForm.register")}
                        </button>

                        <p className={style.formText}>
                            {t("auth.registrationForm.socialMedia")}
                        </p>

                        <button type="submit" className={style.btn}>
                            <i className="bx bxl-google"></i> {t("auth.registrationForm.google")}
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
