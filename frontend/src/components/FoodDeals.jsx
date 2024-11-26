import React, { useEffect, useState } from "react";
import styles from "./FoodDeals.module.css";
import foodDealImage from "../assets/foodDealImage.png";
import axios from "axios";
import { getFoodDeals } from "../services/getFoodDeals.js";

function Deals() {
  const [foodDeals, setFoodDeals] = useState([]);
  useEffect(() => {
    // getFoodDeals().then(res=>setFoodDeals(res.data))
    // .catch(err=>console.log("error in getting food deals", err))
  }, []);

  return (
    <div className={styles.container}>
      
      <div className={styles.body}>
        {/* <ul className={styles.foodDeals}>
          {console.log(foodDeals)}
          {foodDeals?.map((foodDeal, key) => (
            <li key={key} className={styles.deal1}>
              <img
                src={foodDeal.imageUrl}
                alt=""
                className={styles.foodDealImage}
              />
              <p className={styles.discount}>-{foodDeal.discount}%</p>
              <div className={styles.dealContent}>
                <p className={styles.restaurant}>Restaurant</p>
                <h3 className={styles.restaurantName}>{foodDeal.restaurant}</h3>
              </div>
            </li>
          ))}
        </ul> */}
        <div className={styles.deal1}>
          <img src={foodDealImage} alt="" className={styles.foodDealImage} />
          <p className={styles.discount}>-40%</p>
          <div className={styles.dealContent}>
            <p className={styles.restaurant}>Restaurant</p>
            <h3 className={styles.restaurantName}>Chef Burgers London</h3>
          </div>
        </div>
        <div className={styles.deal1}>
          <img src={foodDealImage} alt="" className={styles.foodDealImage} />
          <p className={styles.discount}>-40%</p>
          <div className={styles.dealContent}>
            <p>Restaurant</p>
            <h3>Chef Burgers London</h3>
          </div>
        </div>
        <div className={styles.deal1}>
          <img src={foodDealImage} alt="" className={styles.foodDealImage} />
          <p className={styles.discount}>-40%</p>
          <div className={styles.dealContent}>
            <p>Restaurant</p>
            <h3>Chef Burgers London</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
