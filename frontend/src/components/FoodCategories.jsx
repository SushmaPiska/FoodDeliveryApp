import React, { useEffect, useState } from "react";
import styles from "./FoodCategories.module.css";
import foodCategory from "../assets/foodCategory.png";
import { getFoodCategories } from "../services/getFoodCategories";
function FoodCategories() {
  const [categories, setCategories]=useState([]);
  useEffect(() => {
    getFoodCategories().then(res=>setCategories(res.data))
    .catch(err=>console.log("error in getting food categories", err))
  }, []);
  return (
    <div className={styles.container}>
      <h2>Order.uk Popular Categories 🤩</h2>
      <div className={styles.body}>
        <ul className={styles.categories}>
          {categories?.map((foodCategory, key)=>(
            <li key={key} className={styles.category}>
              <img src={foodCategory.foodImageUrl} alt="" className={styles.image}/>
          <p className={styles.categoryName}>{foodCategory.foodName}</p>
          <p className={styles.restaurantNo}>{foodCategory.restaurantCount} restaurants</p>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
}

export default FoodCategories;
