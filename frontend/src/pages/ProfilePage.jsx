import React, { useEffect, useState } from "react";
import styles from "./ProfilePage.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import backArrow from "../assets/backArrow.png";
import myProfilePic from "../assets/myProfilePic.png";
import paymentCardIcon from "../assets/paymentCard.png";
import editIcon from "../assets/editIcon.png";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import EditPayMethodPopup from "./EditPayMethodPopup";
import { sliceMethod } from "../helper/sliceMethod";
import axios from "axios";

function ProfilePage({ paymentCards, setIsPaymentCardsChanged }) {
  const navigate = useNavigate();
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditModeOn, setIsEditModeOn] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user && user._id;

  const [profileData, setProfileData] = useState({
    fullName: user.name,
    email: user.email,
    gender:user.gender,
    country:user.country,
  });

  const handleBack = () => {
    navigate("/home");
  };
  const openEditPopup = (paymentCard = null) => {
    setIsEditPopupOpen(true);
    setSelectedCard(paymentCard);
  };
  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedCard(null);
  };

  
  const handleEditToggle = async () => {
    if (isEditModeOn) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/auth/updateProfile/${userId}`,
          {
            name: profileData.fullName,
            email: profileData.email,
            gender: profileData.gender,
            country: profileData.country,
          }
        );
        console.log(response.data);
  
        localStorage.setItem("user", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error updating profile:", error.response?.data || error.message);
      }
    }
    setIsEditModeOn(!isEditModeOn);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const getPopupWidth = () => {
    if (window.innerWidth <= 768) {
      return "90%";
    } else {
      return "40%";
    }
  };
  return (
    <>
    <div className={styles.navBar}>
          <NavBar />
        </div>
      <div className={styles.container}>
        
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
            <span className={styles.myName}>{profileData.fullName}</span>
            <button className={styles.editBtn} onClick={handleEditToggle}>
              {isEditModeOn ? "Save" : "Edit"}
            </button>
          </div>
          <div className={styles.myDetails}>
            <div className={styles.inputItem}>
              <label htmlFor="fullName">Full Name</label>
              {isEditModeOn ? (
                <input
                  type="text"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  className={`${styles.inputField} ${styles.editModeInput}`}
                />
              ) : (
                <p className={styles.inputField}>{profileData.fullName}</p>
              )}
            </div>
            <div className={styles.inputItem}>
              <label htmlFor="fullName">Email Address</label>
              {isEditModeOn ? (
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className={`${styles.inputField} ${styles.editModeInput}`}
                />
              ) : (
                <p className={styles.inputField}>{profileData.email}</p>
              )}
            </div>
            <div className={styles.inputItem}>
              <label htmlFor="fullName">Gender</label>
              {isEditModeOn ? (
                <input
                  type="text"
                  name="gender"
                  value={profileData.gender}
                  onChange={handleInputChange}
                  className={`${styles.inputField} ${styles.editModeInput}`}
                />
              ) : (
                <p className={styles.inputField}>{profileData.gender}</p>
              )}
            </div>
            <div className={styles.inputItem}>
              <label htmlFor="fullName">Country</label>
              {isEditModeOn ? (
                <input
                  type="text"
                  name="country"
                  value={profileData.country}
                  onChange={handleInputChange}
                  className={`${styles.inputField} ${styles.editModeInput}`}
                />
              ) : (
                <p className={styles.inputField}>{profileData.country}</p>
              )}
            </div>
          </div>
          <div className={styles.dividerLine}></div>
          <h3>Saved Payment Methods</h3>
          <div className={styles.paymentMethods}>
            {paymentCards?.map((paymentCard, key) => (
              <div key={key} className={styles.paymentCard}>
                <img src={paymentCardIcon} alt="" />
                <div className={styles.cardNum}>
                  <p>xxxx xxxx xxxx {sliceMethod(paymentCard.cardNumber)}</p>
                  <p className={styles.lightText}>{paymentCard.nameOnCard}</p>
                </div>
                <img
                  src={editIcon}
                  alt=""
                  className={styles.editIcon}
                  onClick={() => openEditPopup(paymentCard)}
                />
              </div>
            ))}

            <Popup
              open={isEditPopupOpen}
              onClose={closeEditPopup}
              modal
              nested
              className={styles.popup}
              contentStyle={{ width:getPopupWidth()}}
            >
              <EditPayMethodPopup
                card={selectedCard}
                closePopup={closeEditPopup}
                setIsPaymentCardsChanged={setIsPaymentCardsChanged}
              />
            </Popup>
            <div
              className={styles.addNewCard}
              onClick={() => openEditPopup(null)}
            >
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
