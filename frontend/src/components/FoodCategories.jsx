import React from "react";
import styles from "./FoodCategories.module.css";
import foodCategory from "../assets/foodCategory.png";
function FoodCategories() {
  return (
    <div className={styles.container}>
      <h2>Order.uk Popular Categories 🤩</h2>
      <div className={styles.body}>
        <div className={styles.category}>
          <img src={foodCategory} alt="" className={styles.image}/>
          <p className={styles.categoryName}>Salads</p>
          <p className={styles.restaurantNo}>2 restaurants</p>
        </div>
        <div className={styles.category}>
          <img src={foodCategory} alt="" 
          className={styles.image}/>
          <p className={styles.categoryName}>Salads</p>
          <p className={styles.restaurantNo}>2 restaurants</p>
        </div>
        <div className={styles.category}>
          <img src={foodCategory} alt="" className={styles.image}/>
          <p className={styles.categoryName}>Salads</p>
          <p className={styles.restaurantNo}>2 restaurants</p>
        </div>
        <div className={styles.category}>
          <img src={foodCategory} alt="" className={styles.image}/>
          <p className={styles.categoryName}>Salads</p>
          <p className={styles.restaurantNo}>2 restaurants</p>
        </div>
        <div className={styles.category}>
          <img src={foodCategory} alt="" className={styles.image}/>
          <p className={styles.categoryName}>Salads</p>
          <p className={styles.restaurantNo}>2 restaurants</p>
        </div>
        <div className={styles.category}>
          <img src={foodCategory} alt="" className={styles.image}/>
          <p className={styles.categoryName}>Salads</p>
          <p className={styles.restaurantNo}>2 restaurants</p>
        </div>
      </div>
    </div>
  );
}

export default FoodCategories;
