import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import SmallArticle from "../components/SmallArticle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { articlesI } from "../interfaces/articles.interface";
import { usersI } from "../interfaces/users.interface";

import styles from "../styles/Search.module.scss";
import Image from "next/image";

const Search: NextPage = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [articles, setArticles] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSubmit = async (event: FormEvent) => {
        //! do poprawy - podpiąć pod api
        event.preventDefault();
        console.log("searchText :>> ", searchText);
        setIsSearch(true);
        fetch("http://localhost:3000/data/articles1.json")
            .then((result) => result.json())
            .then((articles) => setArticles(articles))
            .catch((err) => {
                console.log("err :>> ", err);
            });
        fetch("http://localhost:3000/data/users.json")
            .then((result) => result.json())
            .then((users) => setUsers(users))
            .catch((err) => {
                console.log("err :>> ", err);
            });
    };
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <main>
                    <form
                        action="#"
                        method="get"
                        onSubmit={handleSubmit}
                        className={styles.searchForm}
                    >
                        <label htmlFor="search">
                            <span className={styles.formText}>
                                Wpisz szukaną frazę
                            </span>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className={styles.search}
                                value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                            />
                        </label>
                        <button type="submit" className={styles.searchButton}>
                            Szukaj
                        </button>
                    </form>
                    {isSearch ? (
                        <SearchContainer articles={articles} users={users} />
                    ) : (
                        <BlankSearch />
                    )}
                </main>
                <Footer />
            </div>
        </>
    );
};

const SearchContainer: NextPage<{
    articles: Array<articlesI>;
    users: Array<usersI>;
}> = ({ articles, users }) => {
    console.log("users :>> ", users);
    console.log("articles :>> ", articles);
    const articlesList = articles.map((article, index) => (
        <SmallArticle
            key={index}
            id={article.id}
            title={article.title}
            author={article.author}
            content={article.content}
            date={article.date}
            img={article.img}
        />
    ));
    return (
        <>
            {articles.length || users.length ? (
                <div className={styles.searchContainer}>
                    <div className={styles.usersContainer}>
                        <h4>Użytkownicy ({users.length})</h4>
                        <div className={styles.users}>usersList</div>
                    </div>
                    <div className={styles.articlesContainer}>
                        <h4>Posty ({articles.length})</h4>
                        <div className={styles.articles}>{articlesList}</div>
                    </div>
                </div>
            ) : (
                <SearchNotFound />
            )}
        </>
    );
};

const BlankSearch: NextPage = () => {
    return (
        <div className={styles.searchBlankContainer}>
            <div className={styles.imageBlankSearch}>
                <Image
                    src={"/images/blank_search.svg"}
                    layout="fill"
                    alt="Pusta strona przed wyszukaniem"
                    priority
                />
            </div>
        </div>
    );
};

const SearchNotFound: NextPage = () => {
    return (
        <div className={styles.searchNotFoundContainer}>
            <h3>Nic tu nie ma</h3>
            <p>
                Przykro nam, nie znaleźliśmy żadnych wyników dla wyszukanej
                frazy
            </p>
            <div className={styles.imageSearchNotFound}>
                <Image
                    src={"/images/search_not_found.svg"}
                    layout="fill"
                    alt="Brak wyników"
                    priority
                />
            </div>
        </div>
    );
};

export default Search;
