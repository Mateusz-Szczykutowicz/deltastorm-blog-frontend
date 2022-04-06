import { NextPage } from "next";

import styles from "../styles/Footer.module.scss";

const Footer: NextPage = () => {
    return (
        <div className={styles.footerWrapper}>
            <footer>
                <h3>&copy; Copyright 2022 | Delta Storm</h3>
                <p>
                    All Rigths Reserved | Created by Mateusz Szczykutowicz and
                    Karolina Adamowicz
                </p>
            </footer>
        </div>
    );
};

export default Footer;
