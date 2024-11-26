import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import backArrow from "../assets/backArrow.png";
import myProfilePic from "../assets/myProfilePic.png";
import paymentCard from "../assets/paymentCard.png";
import editIcon from "../assets/editIcon.png";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import EditPayMethodPopup from "./EditPayMethodPopup";
function ProfilePage() {

  const navigate = useNavigate();
  const [isEditPopupOpen, setIsEditPopupOpen]=useState(false)
  const handleBack = () => {
    navigate("/home");
  };
  const openEditPopup=()=>{
    setIsEditPopupOpen(true)
  }
  const closeEditPopup=()=>{
    setIsEditPopupOpen(false)
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
            <h3>My Profile</h3>
          </div>
          <div className={styles.profileHead}>
            <img src={myProfilePic} alt="" />
            <span className={styles.myName}>My Name</span>
            <button className={styles.editBtn}>Edit</button>
          </div>
          <div className={styles.myDetails}>
            <div className={styles.inputItem}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                defaultValue="My Name"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputItem}>
              <label htmlFor="fullName">Email Address</label>
              <input
                type="text"
                name="fullName"
                defaultValue="My Name"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputItem}>
              <label htmlFor="fullName">Gender</label>
              <input
                type="text"
                name="fullName"
                defaultValue="My Name"
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputItem}>
              <label htmlFor="fullName">Country</label>
              <input
                type="text"
                name="fullName"
                defaultValue="My Name"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.dividerLine}>

          </div>
          <p>Saved Payment Methods</p>
          <div className={styles.paymentMethods}>

            <div className={styles.paymentCard}>
                <img src={paymentCard} alt="" />
                <div className={styles.cardNum}>
                    <p>xxxx xxxx xxxx 1234</p>
                    <p className={styles.lightText}>My Name</p>
                </div>
                <img src={editIcon} alt="" className={styles.editIcon} onClick={openEditPopup}/>
            </div>
            <Popup
                open={isEditPopupOpen}
                onClose={closeEditPopup}
                modal 
                nested
                className={styles.popup}
                contentStyle={{width:"60%"}}
            >
                <EditPayMethodPopup/>

            </Popup>
            <div className={styles.addNewCard}>
                <p className={styles.addIcon}>+</p>
                <p>Add New Card</p>
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

export default ProfilePage;
