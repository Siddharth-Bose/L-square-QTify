import React from "react";
import searchIcon from "../../assets/search-icon.svg";
import styles from "./Search.module.css";

const Search = ({ search }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={search} />
      <button className={styles.searchButton}>
        <img src={searchIcon} alt="search" />
      </button>
    </form>
  );
};

export default Search;
