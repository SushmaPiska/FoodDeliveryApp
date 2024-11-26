import React from "react";
import styles from "./NavBar.module.css";
import offerIcon from "../assets/offerIcon.png";
import location from "../assets/location.png";
import cartIcon from "../assets/cartIcon.png";
import cartShowIcon from "../assets/cartShowIcon.png";
import  logo from "../assets/logo.png";
import  userIcon from "../assets/userIcon.png";
import { useNavigate } from "react-router-dom";
function NavBar({setIsCartOpen,isCartOpen}) {
  const navigate=useNavigate()
  const handleShowCart=()=>{
    setIsCartOpen(!isCartOpen)
  }
  const handleProfile=()=>{
    navigate('/profilePage')

  }
  return (
    <div className={styles.container}>
      <div className={styles.navTop}>
        <div className={styles.div1}>
          <img src={offerIcon} alt="" className={styles.icon}/>
          <p>
            Get 5% Off your first order,
            <span className={styles.promoOrders}> <u>Promo: ORDER5</u></span>
          </p>
        </div>
        <div className={styles.div2}>
          <img src={location} alt="" className={styles.icon}/>
          <p>Regent Street, A4, A4201, London </p>
          <p className={styles.changeLocation}> <u>Change Location</u></p>
        </div>
        <div className={styles.div3} onClick={handleShowCart}>
          <img src={cartIcon} alt="" className={styles.cartIcon}/>
          <p className={styles.whiteText}>My Cart</p>
          <img src={cartShowIcon} alt="" className={styles.cartShowIcon}/>
        </div>
      </div>
      <div className={styles.navBody}>
        <img src={logo} alt="" className={styles.logo}/>
        <p className={styles.navItem}>Home</p>
        <p className={styles.navItem}>Browse Menu</p>
        <p className={styles.navItem}>Special Offers</p>
        <p className={styles.navItem}>Restaurants</p>
        <p className={styles.navItem}>Track Order</p>
        <button className={styles.loginBtn} onClick={handleProfile}>
            <img src={userIcon} alt="" />
            <p>Login/Signup</p>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
