import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import SmallArticle from "../components/SmallArticle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NextPageComponent from "../components/NextPage";
import PermissionsGate from "../components/PermissionsGate";
import BlockWarning from "../components/BlockWarning";
import { articlesI } from "../interfaces/articles.interface";
import { PermissionsEnum } from "../interfaces/permissions.interface";
import styles from "../styles/Home.module.scss";

const Home: NextPage<{ articles: Array<articlesI> }> = ({ articles }) => {
    const articlesList = articles.map((article, i) => (
        <SmallArticle
            key={i}
            id={article.id}
            title={article.title}
            author={article.author}
            content={article.content}
            date={article.date}
            img={article.img}
        />
    ));
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog | Delta Storm</title>
                <meta
                    name="description"
                    content="Blog" //! Do zmiany
                />
                <link rel="icon" href="/public/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <PermissionsGate
                    permission={PermissionsEnum.BLOCKED}
                    userPermission="blocked"
                >
                    <BlockWarning />
                </PermissionsGate>

                {articlesList}

                <NextPageComponent />
            </main>

            <Footer />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const articles = await (
        await fetch("http://localhost:3000/data/articles.json")
    ).json();
    return { props: { articles } };
};

export default Home;
