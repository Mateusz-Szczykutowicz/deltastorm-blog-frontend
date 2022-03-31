import { NextPage } from "next";

import styles from "../styles/Footer.module.scss";

const Footer: NextPage = () => {
    return (
        <footer className={styles.footerWrapper}>
            <h3>&copy; Copyright 2022 | Delta Storm</h3>
            <p>
                All Rigths Reserved | Created by Mateusz Szczykutowicz and
                Karolina Adamowicz
            </p>
        </footer>
    );
};

export default Footer;
