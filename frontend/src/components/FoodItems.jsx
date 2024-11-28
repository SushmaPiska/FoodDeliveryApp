import React, { useEffect, useState } from "react";
import styles from "./FoodItems.module.css";
import foodItem from "../assets/foodItem.png";
import { addToCart } from "../services/cartItemsService.js";

function FoodItems({foodItems,setIsCartChanged}) {
  
  // const [foodItems, setFoodItems] = useState([]);
  
  const handleAddToCart = async (item) => {
    setIsCartChanged(true)
    try {
      // Send item data to the backend
      const response = await addToCart(item);
      console.log("Added to cart:", response.data);

      // Update local cart state if needed
      // setCartItems((prevCartItems) => [...prevCartItems, item]);
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.foodItems}>
        {foodItems?.map((foodItem, key) => (
          <li key={key} className={styles.foodCard} >
            <div className={styles.leftDetails}>
              <h3 className={styles.header}>
                {foodItem.name}
              </h3>
              <p className={styles.foodContent}>
                {foodItem.details}
              </p>
              <h3>₹ {foodItem.cost}</h3>
            </div>
            <div className={styles.right}>
              <img src={foodItem.foodItemUrl} alt="" className={styles.image} />
              <div className={styles.addBtn}>
                <p className={styles.addIcon} onClick={()=>handleAddToCart(foodItem)}>+</p>
              </div>
            </div>
          </li>
        ))}
        {/* <div className={styles.leftDetails}>
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
      </ul>
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
        </div> */}
      </ul>
    </div>
  );
}

export default FoodItems;
