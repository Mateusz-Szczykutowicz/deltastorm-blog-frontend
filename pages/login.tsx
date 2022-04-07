import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "../styles/Login.module.scss";

const Login: NextPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState("password");
    const handleShowPassword = (e: FormEvent) => {
        e.preventDefault();
        if (showPassword === "password") {
            setShowPassword("text");
        } else {
            setShowPassword("password");
        }
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        //! zrobić sprawdzenie
        console.log("email :>> ", email);
        console.log("password :>> ", password);
        console.log("checked :>> ", checked);
    };
    return (
        <>
            <Head>
                <title>Zaloguj | Delta Storm</title>
            </Head>
            <div className={styles.wrapper}>
                <Header />
                <h2 className={styles.header}>Logowanie</h2>
                <form action="#" method="post" className={styles.loginForm}>
                    <label htmlFor="email">
                        <p className={styles.inputText}>E-mail</p>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            className={styles.loginInput}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label
                        htmlFor="password"
                        className={styles.passwordInputContainer}
                    >
                        <p className={styles.inputText}>Hasło</p>
                        <input
                            type={showPassword}
                            name="password"
                            id="password"
                            className={styles.loginInput}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={handleShowPassword}
                            className={styles.visibleButton}
                        >
                            <FontAwesomeIcon
                                icon={faEye}
                                className={styles.visibleEye}
                                id="eye"
                            />
                        </button>
                    </label>
                    <label
                        htmlFor="rememberCheckbox"
                        className={styles.rememberCheckboxContainer}
                    >
                        <input
                            type="checkbox"
                            name="rememberCheckbox"
                            id="rememberCheckbox"
                            checked={checked}
                            className={styles.rememberCheckbox}
                            onChange={() => setChecked(!checked)}
                        />
                        <span className={styles.checkmark}></span>
                        <p className={styles.checkboxText}>
                            Pamiętaj moje hasło
                        </p>
                    </label>
                    <button
                        type="submit"
                        className={styles.submitButton}
                        onClick={handleSubmit}
                    >
                        Zaloguj się
                    </button>
                </form>
                <div className={styles.info}>
                    <div className={styles.resetPassword}>
                        <span>Zapomniałeś hasła?</span>
                        <Link href={"/recover"}>Zresetuj hasło</Link>
                    </div>
                    <div className={styles.register}>
                        <span>Nie masz jeszcze konta?</span>
                        <Link href={"/register"}>Zarejestruj się</Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Login;
