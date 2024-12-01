import React from "react";
import styles from "./GetStarted.module.css";
import getStarted from "../assets/getStarted.png";
function GetStarted() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={getStarted} alt="" className={styles.image} />
        <p className={styles.text1}>Earn more with lower fees</p>
        <div className={styles.content}>
          <p className={styles.text2}>signup as a business</p>
          <h3 className={styles.title}>Partner with us</h3>
          <button>Get Started</button>
        </div>
      </div>
      <div className={styles.card}>
        <img src={getStarted} alt="" className={styles.image} />
        <p className={styles.text1}>Earn more with lower fees</p>
        <div className={styles.content}>
          <p className={styles.text2}>signup as a business</p>
          <h3 className={styles.title}>Partner with us</h3>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
