import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcomeText}>
        Welcome to Benny’s Pet Lounge where every fur baby gets the VIPaw treatment!
      </div>
    </div>
  );
}
