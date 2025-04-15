import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title = "Top Albums", apiEndpoint }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error("Error fetching albums:", err));
  }, [apiEndpoint]);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>
        <button
          className={styles.collapseBtn}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? "Collapse" : "Show All"}
        </button>
      </div>
      <div className={styles.wrapper}>
        {isCollapsed ? (
          <div className={styles.albumGridExpanded}>
            {albums.map((album) => (
              <Card key={album.id} albumName={album.title} img={album.image} />
            ))}
          </div>
        ) : (
          <div className={styles.scrollWrapper}>
            <div className={styles.albumScrollWrapper} ref={scrollRef}>
              <div className={styles.albumGrid}>
                {albums.slice(0, 7).map((album) => (
                  <Card
                    key={album.id}
                    albumName={album.title}
                    img={album.image}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
