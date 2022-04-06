import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/NextPage.module.scss";

const NextPageComponent: NextPage = () => {
    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            <button
                type="button"
                onClick={() => router.push("/")}
                className={styles.inactive}
            >
                {`< Poprzednia`}
            </button>
            <div className={styles.pages}>
                <span>1</span>
                <span>z</span>
                <span>6</span>
            </div>
            <button type="button" onClick={() => router.push("/page/2")}>
                {`Następna >`}
            </button>
        </div>
    );
};

export default NextPageComponent;
