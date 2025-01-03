import React from "react";
import styles from "./HomePage.module.css";
import NavBar from "../components/NavBar";
import FoodDeals from "../components/FoodDeals";
import FoodCategories from "../components/FoodCategories";
import PopularRestaurants from "../components/PopularRestaurants";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import KnowMore from "../components/KnowMore";
import people from "../assets/people.png";
import logo from "../assets/logo.png";
import appStore from "../assets/appStore.png";
import ShowCase from "../components/ShowCase";
function HomePage({ setProductClicked }) {
  return (
    <>
    <div className={styles.navBarr}>
          <NavBar />
        </div>
      <div className={styles.container}>
        
        <div className={styles.body}>
          <div className={styles.showCase}>
            <ShowCase/>
          </div>
          <div className={styles.deals}>
            <div className={styles.navBar}>
              <h2 className={styles.dealHeading}>
                Up to -40% 🎊 Order.uk exclusive deals
              </h2>
              <ul className={styles.navList}>
                <li className={`${styles.listItem} ${styles.dealListItem}`}>
                  Vegan
                </li>
                <li className={`${styles.listItem} ${styles.dealListItem}`}>
                  Sushi
                </li>
                <li className={styles.fastFoodBtn + " " + styles.listItem}>
                  Pizza & Fast food
                </li>
                <li className={`${styles.listItem} ${styles.dealListItem}`}>
                  others
                </li>
              </ul>
            </div>
            <FoodDeals />
          </div>
          <div className={styles.foodCategories}>
            <FoodCategories />
          </div>
          <div className={styles.popularRest}>
            <PopularRestaurants setProductClicked={setProductClicked} />
          </div>
          <div className={styles.advertisement}>
            <div className={styles.leftAd}>
              <img src={people} alt="" className={styles.people} />
            </div>
            <div className={styles.rightAd}>
              <div className={styles.adHead}>
                <img src={logo} alt="" className={styles.logoAd}/>
                <h1>ing is more</h1>
              </div>

              <p className={styles.adSubHead}>
                <span className={styles.adSubHead1}><u>Personalised</u></span> &
                Instant
              </p>
              <p className={styles.p}>Download the Order.uk app for faster ordering</p>
              <img src={appStore} alt="" />
            </div>
          </div>
          <div className={styles.getStarted}>
            <GetStarted />
          </div>
          <div className={styles.knowMore}>
            <KnowMore />
          </div>
          <div className={styles.stats}>
            <div className={styles.stat1}>
              <p className={styles.number}>546+</p>
              <p>Registered Riders</p>
            </div>
            <div className={styles.dividerLine}>

            </div>
            <div className={styles.stat1}>
              <p className={styles.number}>789,900+</p>
              <p>Orders Delivered</p>
            </div>
            <div className={styles.dividerLine}></div>
            <div className={styles.stat1}>
              <p className={styles.number}>690+</p>
              <p>Restaurants Partnered</p>
            </div>
            <div className={styles.dividerLine}></div>
            <div className={styles.stat1}>
              <p className={styles.number}>17,457+</p>
              <p>Food items</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
