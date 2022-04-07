import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "../styles/404.module.scss";

const ErrorPage: NextPage = () => {
    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            <Header />
            <h2 className={styles.header}>Upsss!</h2>
            <p className={styles.text}>
                Strona o podanym adresie nie istenieje
            </p>
            <button className={styles.button} onClick={() => router.push("/")}>
                Wróć na stronę główną
            </button>
            <div className={styles.imageError}>
                <Image
                    src={"/images/error404.svg"}
                    alt="Page not found"
                    layout="fill"
                    priority
                />
            </div>

            <Footer />
        </div>
    );
};

export default ErrorPage;
