import React from "react";
import styles from "./ShowCase.module.css";
import showImg1 from "../assets/showImg1.png";
import showImg2 from "../assets/showImg2.png";
import logo from "../assets/logo.png";
function ShowCase() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>Order Restaurant food, takeaway and groceries.</p>
        <div className={styles.title}>
          <p>Feast Your Senses,</p>
          <p>Fast and Fresh</p>
        </div>
        <p>Enter a postcode to see what we deliver</p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className={styles.inputItem}
          />
          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>
      

      <img src={showImg1} alt="" className={styles.image1} />
      <img src={showImg2} alt="" className={styles.image2} />

      <div className={styles.colorBack}></div>

      <div className={styles.card1}>
        <div className={styles.cardHead}>
          <img src={logo} alt="" />
          <p>now</p>
        </div>
        <p>We’ve Received your order!</p>
        <p>Awaiting Restaurant acceptance </p>
      </div>
      <div className={styles.card2}>
        <div className={styles.cardHead}>
          <img src={logo} alt="" />
          <p>now</p>
        </div>
        <p>Order Accepted! </p>
        <p>Your order will be delivered shortly </p>
      </div>
      <div className={styles.card3}>
        <div className={styles.cardHead}>
          <img src={logo} alt="" />
          <p>now</p>
        </div>
        <p>Your rider's nearby</p>
        <p>They're almost there - get ready</p>
      </div>
    </div>
  );
}

export default ShowCase;
