import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
// import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          title="Top Albums"
          apiEndpoint="https://qtify-backend-labs.crio.do/albums/top"
        />
        <Section
          title="New Albums"
          apiEndpoint="https://qtify-backend-labs.crio.do/albums/new"
        />
      </div>
    </>
  );
}

export default Home;
