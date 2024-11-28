import React, { useState } from "react";
import styles from "./AddAddressPage.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import backArrow from "../assets/backArrow.png";
import location from "../assets/location.png";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddAddressPopup from "./AddAddressPopup";

function AddAddressPage() {
  const navigate = useNavigate();
  const [isAddAddressPopupOpen, setIsAddAddressPopupOpen]=useState(false)

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user && user.name ? user.name : "Guest";

  const handleBack = () => {
    navigate("/checkout");
  };
  const openAddAddressPopup=()=>{
    setIsAddAddressPopupOpen(true)
  }
  const closeAddAddressPopup=()=>{
    setIsAddAddressPopupOpen(false)
  }
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <NavBar />
        </div>
        <div className={styles.body}>
          <div className={styles.header}>
            <img
              src={backArrow}
              alt=""
              className={styles.backArrow}
              onClick={handleBack}
            />
            <h2>Your Addresses</h2>
          </div>
          <div className={styles.addressContainer}>
            <div className={styles.addAddress} >
              <p className={styles.addIcon} onClick={openAddAddressPopup}>+</p>
              <p>Add Address</p>
            </div>
            <Popup
                open={isAddAddressPopupOpen}
                onClose={closeAddAddressPopup}
                modal
                nested
                className={styles.popup}
                contentStyle={{ width: "60%" }}
            >
                <AddAddressPopup closePopup={closeAddAddressPopup}/>

            </Popup>
            <div className={styles.address}>
              <h4>{userName}</h4>
            </div>
            <div className={styles.address}></div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default AddAddressPage;
