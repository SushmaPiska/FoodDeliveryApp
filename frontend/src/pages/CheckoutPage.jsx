import React, { useEffect, useState } from "react";
import styles from "./CheckoutPage.module.css";
import NavBar from "../components/NavBar";
import backArrow from "../assets/backArrow.png";
import orderedFood from "../assets/orderedFood.png";
import locationIcon from "../assets/locationIcon.png";
import PopularRestaurants from "../components/PopularRestaurants";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function CheckoutPage({ orderedItems, amount }) {
  const navigate = useNavigate();

  


  const handleBack = () => {
    navigate("/productPage");
  };
  const handleAddAddress = () => {
    navigate("/addAddressPage");
  };
  const handlePayment = () => {
    navigate("/paymentPage");
  };

 
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <NavBar />
        </div>
        <div className={styles.orderDetails}>
          <div className={styles.header}>
            <img
              src={backArrow}
              alt=""
              className={styles.backArrow}
              onClick={handleBack}
            />
            <h2>Your Order Details</h2>
          </div>
          <div className={styles.body}>
            <ul className={styles.orderedItems}>
              {orderedItems?.map((orderedItem, key) => (
                <>
                  <li className={styles.orderedItem}>
                    <img
                      src={orderedItem.itemUrl}
                      alt=""
                      className={styles.foodImage}
                    />
                    <div className={styles.itemName}>
                      <p>{orderedItem.name}</p>
                      <p className={styles.itemCount}>
                        {orderedItem.itemCount}x item
                      </p>
                    </div>
                    <p className={styles.cost}>₹{orderedItem.cost}</p>
                  </li>
                  <div className={styles.dividerLine}></div>
                </>
              ))}
              
              <div className={styles.notes}>
                <p>Notes</p>
                <input
                  type="text"
                  placeholder="Add order notes"
                  className={styles.noteInput}
                />
              </div>
            </ul>
            <div className={styles.nextSteps}>
              <div
                className={styles.addressContainer}
                onClick={handleAddAddress}
              >
                <img
                  src={locationIcon}
                  alt=""
                  className={styles.locationIcon}
                />
                <div className={styles.address}>
                  <p>Delivery Address</p>
                  <p className={styles.addOnAddress}>
                    45, Green Street, Sector 12...
                  </p>
                </div>
                <p className={styles.greaterThanIcon}>&gt;</p>
              </div>
              <div className={styles.dividerLine}></div>
              <div className={styles.items}>
                <p>Items</p>
                <p>₹{amount}</p>
              </div>
              <div className={styles.salesTax}>
                <p>Sales Tax</p>
                <p>₹10</p>
              </div>
              <div className={styles.dividerLine}> </div>
              <div className={styles.subTotal}>
                <p>Subtotal ({orderedItems.length} items)</p>
                <p className={styles.subTotalCost}>₹{amount+10}</p>
              </div>
              <button className={styles.payMethodBtn} onClick={handlePayment}>
                Choose Payment Method
              </button>
            </div>
          </div>
        </div>
        <div className={styles.similarRest}>
          <PopularRestaurants />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default CheckoutPage;
