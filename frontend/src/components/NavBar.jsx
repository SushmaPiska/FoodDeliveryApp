import React, { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import offerIcon from "../assets/offerIcon.png";
import locationIcon from "../assets/location.png";
import cartIcon from "../assets/cartIcon.png";
import cartShowIcon from "../assets/cartShowIcon.png";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menuIcon.png";
import userIcon from "../assets/userIcon.png";
import myProfilePic from "../assets/myProfilePic.png";
import { useNavigate } from "react-router-dom";
import { getAddresses } from "../services/addressService";
import { AddressContext } from "../context/AddressContext";
import { useLocation } from "react-router-dom";

function NavBar({ setIsCartOpen, isCartOpen }) {
  // const [addresses, setAddresses]=useState(useContext(AddressContext));
  const navigate = useNavigate();
  const handleShowCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleHome = () => {
    navigate("/home");
  };
  const handleProfile = () => {
    const token = localStorage.getItem("token"); 
    if(!token){
      navigate('/signin')
    }
    else{
      navigate("/profilePage");
    }
  };

  let { addresses, setIsAddressChanged } = useContext(AddressContext);
  const defaultAddress = addresses[0]?.fullAddress || "Set Your Location";

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user && user.name ? user.name : "Guest";

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={styles.container}>
      <div className={styles.navTop}>
        <div className={styles.div1}>
          <img src={offerIcon} alt="" className={styles.icon} />
          <p>
            Get 5% Off your first order,
            <span className={styles.promoOrders}>
              {" "}
              <u>Promo: ORDER5</u>
            </span>
          </p>
        </div>
        <div className={styles.div2}>
          <img src={locationIcon} alt="" className={styles.icon} />
          <p>{defaultAddress}</p>
          <p className={styles.changeLocation}>
            {" "}
            <u>Change Location</u>
          </p>
        </div>

        <div className={styles.div3} onClick={handleShowCart}>
          <img src={cartIcon} alt="" className={styles.cartIcon} />
          <p className={styles.whiteText}>My Cart</p>
          <img src={cartShowIcon} alt="" className={styles.cartShowIcon} />
        </div>
      </div>
      <div className={styles.respNavTop}>
        <img src={logo} alt="" />
        <img src={menuIcon} alt="" />
      </div>
      <div className={styles.navBody}>
        <img src={logo} alt="" className={styles.logo} />
        <p
          className={
            location.pathname === "/home"
              ? `${styles.active} ${styles.navItem}`
              : ` ${styles.navItem}`
          }
          onClick={handleHome}
        >
          Home
        </p>
        <p className={styles.navItem}>Browse Menu</p>
        <p className={styles.navItem}>Special Offers</p>
        <p className={
            location.pathname === "/productPage"
              ? `${styles.active} ${styles.navItem}`
              : `${styles.navItem}`
          }>Restaurants</p>
        <p className={styles.navItem}>Track Order</p>
        <button className={styles.loginBtn} onClick={handleProfile}>
          <img src={userIcon} alt="" />
          <p>Hey {userName}</p>
        </button>
      </div>
      <div className={styles.respNavBody}>
        <button className={styles.profileBtn} onClick={handleProfile}>
          <img src={myProfilePic} alt="" className={styles.profilePic} />
          <p>Hey {userName}</p>
        </button>
        <div className={styles.div3} onClick={handleShowCart}>
          <img src={cartIcon} alt="" className={styles.cartIcon} />
          <p className={styles.whiteText}>My Cart</p>
          <img src={cartShowIcon} alt="" className={styles.cartShowIcon} />
        </div>
      </div>
      <div className={styles.location}>
        <img src={location} alt="" className={styles.icon} />
        <p>Regent Street, A4, A4201, London </p>
      </div>
    </div>
  );
}

export default NavBar;
