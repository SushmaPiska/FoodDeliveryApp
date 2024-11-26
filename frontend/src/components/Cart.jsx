import React from "react";
import styles from "./Cart.module.css";
import shareIcon from "../assets/shareIcon.png";
import cartIcon from "../assets/cartIcon.png";
import removeIcon from "../assets/removeIcon.png";
import chooseIcon from "../assets/chooseIcon.png";
import forwardIcon from "../assets/forwardIcon.png";
import deliveryScooter from "../assets/deliveryScooter.png";
import newStore from "../assets/newStore.png";
import checkoutIcon from "../assets/checkoutIcon.png";
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate=useNavigate()
    const handleCheckout=()=>{
        navigate('/checkout')
    }
  return (
    <div className={styles.container}>
      <div className={styles.shareCart}>
        <img src={shareIcon} alt="" className={styles.shareIcon} />
        <p>Share this cart with your friends</p>
        <button className={styles.copyBtn}>Copy Link</button>
      </div>
      <div className={styles.basket}>
        <div className={styles.basketHead}>
          <img src={cartIcon} alt="" />
          <h2>My Basket</h2>
        </div>
        <div className={styles.cartItem}>
          <p className={styles.itemCount}>1x</p>
          <div className={styles.itemDetails}>
            <p className={styles.cost}>₹120</p>
            <p className={styles.itemName}>Royal Cheese Burger</p>
            <p className={styles.extraText}>With extra fries</p>
          </div>
          <img src={removeIcon} alt="" className={styles.removeIcon}/>
        </div>
        <div className={styles.bill}>
          <div className={styles.subTotal}>
            <p>Sub Total</p>
            <p className={styles.amount}>₹230.00</p>
          </div>
          <div className={styles.discounts}>
            <p>Discounts</p>
            <p className={styles.amount}>₹230.00</p>
          </div>
          <div className={styles.deliveryFee}>
            <p>Delivery Fee</p>
            <p className={styles.amount}>₹230.00</p>
          </div>
        </div>
        <div className={styles.totalAndCoupon}>
          <div className={styles.totalToPay}>
            <p>Total to pay</p>
            <p className={styles.totalCost}>₹230.00</p>
          </div>
          <div className={styles.freeItem}>
            <p>Choose your free item..</p>
            <img src={chooseIcon} alt="" />
          </div>
          <div className={styles.couponCode}>
            <p>Apply Coupon Code here</p>
            <img src={forwardIcon} alt="" />
          </div>
        </div>

        <div className={styles.time}>
          <div className={styles.deliveryTime}>
            <img src={deliveryScooter} alt="" />
            <p className={styles.subHead}>Delivery</p>
            <p className={styles.timing}>Starts at 17:50</p>
          </div>
          <div className={styles.collectionTime}>
            <img src={newStore} alt="" />
            <p className={styles.subHead}>Collection</p>
            <p className={styles.timing}>Starts at 17:50</p>
          </div>
        </div>
        <div className={styles.checkout} onClick={handleCheckout}>
          <img src={checkoutIcon} alt="" className={styles.checkoutIcon} />
          <p>Checkout!</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
