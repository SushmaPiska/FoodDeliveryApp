import React from "react";
import styles from "./KnowMore.module.css";
import orderFood from "../assets/orderFood.png";
import track from "../assets/track.png";
import getOrder from "../assets/getOrder.png";
function KnowMore() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <h2 className={styles.heading}>Know more about us!</h2>
        <ul className={styles.navList}>
          <li className={styles.listItem + " " + styles.frequentQst}>
            Frequent Questions
          </li>
          <li className={styles.listItem}>Who we are?</li>
          <li className={styles.listItem}>Partner Program</li>
          <li className={styles.listItem}>Help & Support</li>
        </ul>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <button className={styles.btn}>How does Order.UK work?</button>
          <p className={styles.query}>What payment methods are accepted?</p>
          <p className={styles.query}>Can I track my order in real-time?</p>
          <p className={styles.query}>
            Are there any special discounts or promotions available?
          </p>
          <p className={styles.query}>Is Order.UK available in my area?</p>
        </div>
        <div className={styles.right}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Place an order</p>
              <img src={orderFood} alt="" />
              <p>Place order through our website or Mobile app</p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Track Progress</p>
              <img src={track} alt="" />
              <p>Place order through our website or Mobile app</p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardTitle}>Get your Order!</p>
              <img src={getOrder} alt="" />
              <p>Place order through our website or Mobile app</p>
            </div>
          </div>
          <p className={styles.bottomText}>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
        </div>
      </div>
    </div>
  );
}

export default KnowMore;
