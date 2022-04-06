import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { articlesI } from "../interfaces/articles.interface";
import styles from "../styles/SmallArticle.module.scss";

const SmallArticles: NextPage<articlesI> = (props) => {
    const { id, title, date, author, content, img } = props;
    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <div className={styles.info}>
                    <h3 className={styles.date}>{date}</h3>-
                    <h3 className={styles.author}>
                        <Link href={"/"}>{author}</Link>
                    </h3>
                </div>
            </div>
            <article>
                <p>{content}</p>
                <Image
                    src={img}
                    width={300}
                    height={130}
                    alt="article"
                    className={styles.mainImage}
                />
            </article>
        </section>
    );
};

export default SmallArticles;
