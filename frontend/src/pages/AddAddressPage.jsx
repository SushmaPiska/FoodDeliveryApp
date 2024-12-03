import React, {useContext,useEffect, useState } from "react";
import styles from "./AddAddressPage.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import backArrow from "../assets/backArrow.png";
import location from "../assets/location.png";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddAddressPopup from "./AddAddressPopup";
import { deleteAddress } from "../services/addressService";
import { AddressContext } from "../context/AddressContext";

function AddAddressPage({   }) {
  const navigate = useNavigate();
  const [isAddAddressPopupOpen, setIsAddAddressPopupOpen] = useState(false);

  const [selectedAddress, setSelectedAddress]=useState();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user && user.name ? user.name : "Guest";

  const handleBack = () => {
    navigate("/checkout");
  };
  const openAddAddressPopup = (address=null) => {
    setIsAddAddressPopupOpen(true);
    setSelectedAddress(address)
  };
  const closeAddAddressPopup = () => {
    setIsAddAddressPopupOpen(false);
    setSelectedAddress(null)
  };

  const handleRemoveAddress = async (address) => {
    try {
      await deleteAddress(address._id)
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error in deleting address", err));
      setIsAddressChanged(true);
    } catch (error) {
      console.error("Error deleting address:", error.message);
    }
  };
  const getPopupWidth = () => {
    if (window.innerWidth <= 768) {
      return "90%";
    } else {
      return "60%";
    }
  };
  let {addresses, setIsAddressChanged}  = useContext(AddressContext);
  //  const defaultAddress =addresses[0]?.fullAddress || "Set Your Location";
// console.log(addresses)

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
            <h2>Your Addresses</h2>
          </div>
          <div className={styles.addressContainer}>
            <div className={styles.addAddress}>
              <p className={styles.addIcon} onClick={()=>openAddAddressPopup(null)}>
                +
              </p>
              <p>Add Address</p>
            </div>
            <Popup
              open={isAddAddressPopupOpen}
              onClose={closeAddAddressPopup}
              modal
              nested
              className={styles.popup}
              contentStyle={{ width:getPopupWidth() }}
            >
              <AddAddressPopup
                closePopup={closeAddAddressPopup}
                setIsAddressChanged={setIsAddressChanged}
                address={selectedAddress}
              />
            </Popup>

            {addresses?.map((address, key) => (
              <li key={key} className={styles.address}>
                <div className={styles.addressHead}>
                  <h4>{userName}</h4>
                  {address.isDefault && (
                    <p className={styles.default}>Default</p>
                  )}
                </div>
                <p className={styles.addressLine}>
                  {address.fullAddress},{address.district},
                  <br /> {address.state},{address.pincode}
                </p>
                <p className={styles.phone}>Phone Number: {address.phone}</p>
                <div className={styles.addressFooter}>
                  <span className={styles.editBtn} onClick={()=>openAddAddressPopup(address)}>Edit </span>
                  <span className={styles.separate}>|</span>
                  <span
                    className={styles.removeBtn}
                    onClick={() => handleRemoveAddress(address)}
                  >
                    {" "}
                    Remove
                  </span>
                </div>
              </li>
            ))}

            {/* </ul> */}
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
