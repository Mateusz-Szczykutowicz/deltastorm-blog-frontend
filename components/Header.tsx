import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header: NextPage = () => {
    return (
        <>
            <header className={styles.wrapper}>
                <h1>Delta Storm</h1>
                <nav className={styles.navWrapper}>
                    <div className={styles.search}>
                        <Link href="/test" passHref>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className={styles.searchIcon}
                            />
                        </Link>
                    </div>

                    <div className={styles.hamburgerMenu}>
                        <FontAwesomeIcon
                            icon={faBars}
                            className={styles.hamburgerMenuIcon}
                        />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
