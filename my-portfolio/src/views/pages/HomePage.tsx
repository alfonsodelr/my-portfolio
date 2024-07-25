// views/HomePage.tsx
import React from "react";
import styles from "@/styles/HomePage.module.css";
import TopBar from "@/views/components/TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <div className={styles.container}>
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

export default HomePage;
