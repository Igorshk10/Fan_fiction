import React, {useState} from "react";
import style from "./AuthForm.module.css";

function AuthForm() {
    const [active, setActive] = useState(false);

    return (
        <div className={style.authWrapper}>
            <div className={`${style.container} ${active ? style.active : ""}`}>

                <div className={`${style.formBox} ${style.login}`}>
                    <form>
                        <h1 className={style.titan}>Login</h1>

                        <div className={style.inputBox}>
                            <input type="text" placeholder="Username" required/>
                            <i className="bx bxs-user"></i>
                        </div>

                        <div className={style.inputBox}>
                            <input type="password" placeholder="Password" required/>
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <div className={style.forgotLink}>
                            <a href="#" className={style.forgotPassword}>Forgot password?</a>
                        </div>

                        <button type="submit" className={style.btn}>Log in</button>

                        <p className={style.formText}>or you can log in with</p>

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
                        <h1 className={style.titan}>Registration</h1>

                        <div className={style.inputBox}>
                            <input type="text" placeholder="Username" required/>
                            <i className="bx bxs-user"></i>
                        </div>

                        <div className={style.inputBox}>
                            <input type="email" placeholder="Email" required/>
                            <i className="bx bxs-envelope-open bx-flip-horizontal"></i>
                        </div>

                        <div className={style.inputBox}>
                            <input type="password" placeholder="Password" required/>
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <button type="submit" className={style.btn}>Register</button>

                        <p>or you can register with</p>

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
                        <h1 className={style.titan}>Welcome!</h1>
                        <p>Don't have an account?</p>
                        <button
                            className={style.btnToggle}
                            onClick={() => setActive(true)}
                        >
                            Register
                        </button>
                    </div>

                    <div className={`${style.togglePanel} ${style.toggleRight} ${active ? style.activeToggleRight : ''}`}>
                        <h1 className={style.titan}>Welcome Back!</h1>
                        <p>Have an account?</p>
                        <button
                            className={style.btnToggle}
                            onClick={() => setActive(false)}
                        >
                            Log in
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AuthForm;
