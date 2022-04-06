import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Warning.module.scss";
const Warning = () => {
    return (
        <div className={styles.wrapper}>
            <button>
                <FontAwesomeIcon
                    icon={faXmark}
                    className={styles.xmark}
                    onClick={() => alert("close")}
                />
            </button>
            <p>
                Twoje konto zostało tymczasowo zablokowane, więcej informacji
                znajdziesz na swoim profilu
            </p>
            <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
                <p className={styles.checkboxText}>Nie pokazuj więcej</p>
            </label>
        </div>
    );
};

export default Warning;
