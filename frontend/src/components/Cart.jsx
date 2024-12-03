import React, { useEffect, useState } from "react";
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
import { deleteCartItem } from "../services/cartItemsService";
// import "./CopyLink.css";

function Cart({ cartItems, setIsCartChanged, amount }) {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleDeleteCartItem = async (cartItem) => {
    try {
      await deleteCartItem(cartItem._id)
        .then((res) => console.log(res.data))
        .catch((err) => console.log("error in deleting cart item", err));
      setIsCartChanged(true);
    } catch (error) {
      console.error("Error deleting cart:", error.message);
    }
  };

  const handleCheckout = () => {
    const token = localStorage.getItem("token"); 
    if(!token){
      navigate('/signin')
    }else{
      navigate("/checkout");
    }
  };
  const handleShare = async () => {
    try {
      const BASE_URL =
        import.meta.env.MODE === "development"
          ? "http://localhost:5173"
          : "https://fooddeliveryapp-24lz.onrender.com";

      const link = `${BASE_URL}/cartDetails`;
      await navigator.clipboard.writeText(link);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
      
    } catch (error) {
      console.error("failed to copy link" + error);
      
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.shareCart}>
        <img src={shareIcon} alt="" className={styles.shareIcon} />
        <p>Share this cart with your friends</p>
        <button className={styles.copyBtn} onClick={handleShare} onMouseLeave={() => setShowTooltip(false)}>Copy Link 
        </button>
        {showTooltip && <span className="tooltip">Link Copied!</span>}
        
      </div>
      <div className={styles.basket}>
        <div className={styles.basketHead}>
          <img src={cartIcon} alt="" />
          <h2>My Basket</h2>
        </div>
        <ul className={styles.cartItems}>
          {cartItems?.map((cartItem, key) => (
            <li key={key} className={styles.cartItem}>
              <p className={styles.itemCount}>{cartItem.itemCount}x</p>
              <div className={styles.itemDetails}>
                <p className={styles.cost}>₹{cartItem.cost}</p>
                <p className={styles.itemName}>{cartItem.name}</p>
              </div>
              <img
                src={removeIcon}
                alt=""
                className={styles.removeIcon}
                onClick={() => handleDeleteCartItem(cartItem)}
              />
            </li>
          ))}
        </ul>

        <div className={styles.bill}>
          <div className={styles.subTotal}>
            <p>Sub Total</p>
            <p className={styles.amount}>₹{amount}.00</p>
          </div>
          <div className={styles.discounts}>
            <p>Discounts</p>
            <p className={styles.amount}>-₹3.00</p>
          </div>
          <div className={styles.deliveryFee}>
            <p>Delivery Fee</p>
            <p className={styles.amount}>₹3.00</p>
          </div>
        </div>
        <div className={styles.totalAndCoupon}>
          <div className={styles.totalToPay}>
            <p>Total to pay</p>
            <p className={styles.totalCost}>₹{amount}.00</p>
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
        <div className={styles.checkoutContainer}>
          <div
            className={amount >= 20 ? styles.checkout : styles.checkoutDisabled}
            onClick={amount >= 20 ? handleCheckout : null} 
          >
            <img src={checkoutIcon} alt="" className={styles.checkoutIcon} />
            <p>Checkout!</p>
          </div>
          {amount < 20 ? (
            <div className={styles.tooltip}>
              <span>Minimum delivery is ₹20, You must</span>
              <br />
              <span>
                Spend <span className={styles.colored}>₹{20 - amount} more</span> for the checkout!
              </span>
            </div>
          ):<div className={styles.tooltip}>
          <span>We are open now, but delivery</span> <br /> <span>starts at <span className={styles.colored}>18:00 </span> 
          however you may</span><br /> order and collect in store now
        </div>}
        </div>
      </div>
    </div>
  );
}

export default Cart;
