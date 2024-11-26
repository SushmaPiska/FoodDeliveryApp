import React from "react";
import styles from "./FoodItems.module.css";
import foodItem from "../assets/foodItem.png";
function FoodItems() {
  return (
    <div className={styles.container}>
      <div className={styles.foodCard}>
        <div className={styles.leftDetails}>
          <h3 className={styles.header}>
            Royal Cheese Burger with extra Fries
          </h3>
          <p className={styles.foodContent}>
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
          </p>
          <h3>₹ 120</h3>
        </div>
        <div className={styles.right}>
          <img src={foodItem} alt="" className={styles.image} />
          <div className={styles.addBtn}>
            <p className={styles.addIcon}>+</p>
          </div>
        </div>
      </div>
      <div className={styles.foodCard}>
        <div className={styles.leftDetails}>
          <h3 className={styles.header}>
            Royal Cheese Burger with extra Fries
          </h3>
          <p className={styles.foodContent}>
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
          </p>
          <h2>₹ 120</h2>
        </div>
        <div className={styles.right}>
          <img src={foodItem} alt="" className={styles.image} />
          <div className={styles.addBtn}>
            <p className={styles.addIcon}>+</p>
          </div>
        </div>
      </div>
      <div className={styles.foodCard}>
        <div className={styles.leftDetails}>
          <h3 className={styles.header}>
            Royal Cheese Burger with extra Fries
          </h3>
          <p className={styles.foodContent}>
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
          </p>
          <h2>₹ 120</h2>
        </div>
        <div className={styles.right}>
          <img src={foodItem} alt="" className={styles.image} />
          <div className={styles.addBtn}>
            <p className={styles.addIcon}>+</p>
          </div>
        </div>
      </div>
      <div className={styles.foodCard}>
        <div className={styles.leftDetails}>
          <h3 className={styles.header}>
            Royal Cheese Burger with extra Fries
          </h3>
          <p className={styles.foodContent}>
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
          </p>
          <h2>₹ 120</h2>
        </div>
        <div className={styles.right}>
          <img src={foodItem} alt="" className={styles.image} />
          <div className={styles.addBtn}>
            <p className={styles.addIcon}>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItems;
