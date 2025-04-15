import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ albumName, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.albumBg} style={{ "--bg-img": `url(${img})` }}>
        <p className={styles.albumName}>{albumName}</p>
      </div>
      <div className={styles.cardAction}>
        <Chip
          sx={{
            height: "auto",
            background: "#000",
            color: "#fff",
            fontSize: "10px",
            fontWeight: "300",
          }}
          label="100 Follows"
          variant="filled"
        />
      </div>
    </div>
  );
}

export default Card;
