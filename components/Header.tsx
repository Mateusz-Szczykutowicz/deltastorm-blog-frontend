import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.scss";

const Header: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <div className={styles.wrapper}>
                <header>
                    <h1>Delta Storm</h1>
                    <Image
                        src={"/public/logo.svg"}
                        width={160}
                        height={35}
                        // layout="fill"
                        alt="Delta Storm"
                        className={styles.logo}
                        onClick={() => router.push("/")}
                    ></Image>
                    <nav className={styles.navWrapper}>
                        <div className={styles.search}>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className={styles.searchIcon}
                                onClick={() => router.push("/search")}
                            />
                        </div>

                        <div className={styles.hamburgerMenu}>
                            <FontAwesomeIcon
                                icon={faBars}
                                className={styles.hamburgerMenuIcon}
                            />
                            <ul className={styles.menu}>
                                <li>
                                    <Link href={"#"}>Wsparcie</Link>
                                </li>
                                <li>
                                    <Link href={"#"}>Zarejestruj się</Link>
                                </li>
                                <li>
                                    <Link href={"#"}>Zaloguj się</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
};

export default Header;
