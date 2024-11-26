import React, { useState } from "react";
import styles from "./ProductPage.module.css";
import NavBar from "../components/NavBar";
import PopularRestaurants from "../components/PopularRestaurants";
import Footer from "../components/Footer";
import FoodDeals from "../components/FoodDeals.jsx";
import productBack from "../assets/productBack.png";
import orderCompleted from "../assets/orderCompleted.png";
import motocross from "../assets/motocross.png";
import rating from "../assets/rating.png";
import productAdFood from "../assets/productAdFood.png";
import clock from "../assets/clock.png";
import searchIcon from "../assets/searchIcon.png";
import profilePic from "../assets/profilePic.png";
import Reviews from "../components/Reviews";
import MoreInfo from "../components/MoreInfo.jsx";
import FoodItems from "../components/FoodItems.jsx";
import Cart from "../components/Cart.jsx";
function ProductPage() {
  const [isCartOpen, setIsCartOpen]=useState(false)
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <NavBar setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen}/>
        </div>
        <div className={styles.productAd}>
          <img src={productBack} alt="" className={styles.productBack} />
          <div className={styles.adComponent}>
            <div className={styles.leftAd}>
              <p>I'm lovin' it!</p>
              <h2 className={styles.adHead}>McDonald's East London</h2>
              <div className={styles.featuresAd}>
                <div className={styles.featureAd}>
                  <img src={orderCompleted} alt="" className={styles.adIcon} />
                  <p>Minimum Order: 12 GBP</p>
                </div>
                <div className={styles.featureAd}>
                  <img src={motocross} alt="" className={styles.adIcon} />
                  <p>Delivery in 20-25 Minutes</p>
                </div>
              </div>{" "}
            </div>
            <div className={styles.rightAd}>
              <img
                src={productAdFood}
                alt=""
                className={styles.productAdFood}
              />
              <img src={rating} alt="" className={styles.rating} />
            </div>
          </div>
          <div className={styles.timings}>
            <img src={clock} alt="" className={styles.clock} />
            <p>Open until 3:00 AM</p>
          </div>
        </div>
        <div className={styles.searchBar}>
          <h2>All Offers from McDonald's East London</h2>
          <div className={styles.search}>
            <img src={searchIcon} alt="" className={styles.searchIcon} />
            <p>Search from menu...</p>
          </div>
        </div>
        <div className="foodMenu"></div>
        <ul className={styles.foodMenu}>
          <li className={styles.foodListItem + " " + styles.offers}>Offers</li>
          <li className={styles.foodListItem}>Burgers</li>
          <li className={styles.foodListItem}>Fries</li>
          <li className={styles.foodListItem}>Snacks</li>
          <li className={styles.foodListItem}>Salads</li>
          <li className={styles.foodListItem}>Cold drinks</li>
          <li className={styles.foodListItem}>Happy meal&reg;</li>
          <li className={styles.foodListItem}>Desserts</li>
          <li className={styles.foodListItem}>Hot drinks</li>
          <li className={styles.foodListItem}>Sauces</li>
          <li className={styles.foodListItem}>Orbit&reg;</li>
        </ul>
        <div className={styles.menuBody}>
          <div className={styles.foodShow}>
            <div className={styles.foodDeals}>
              <FoodDeals />
            </div>
            <div className={styles.burgers}>
              <FoodItems />
            </div>
          </div>
          {isCartOpen && 
          <div className={styles.cart}>
            <Cart/>
          </div>
          }
          
        </div>
        <div className={styles.moreInfo}>
          <MoreInfo />
        </div>
        <div className={styles.map}>{/* <Map/> */}</div>
        <div className={styles.reviews}>
          <Reviews />
        </div>
        <div className={styles.similarRestaurants}>
          <PopularRestaurants />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
