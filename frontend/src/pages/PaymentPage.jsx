import React from "react";
import styles from "./PaymentPage.module.css";
import NavBar from "../components/NavBar";
import backArrow from "../assets/backArrow.png";
import { useNavigate } from "react-router-dom";
import walletIcon from "../assets/walletIcon.png";
import Footer from "../components/Footer";
function PaymentPage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/checkout");
  };
  const handleProceedPayment=()=>{
        navigate('/orderSuccessPage')
  }
  return (
    
    <>
    <div className={styles.navBar}>
        <NavBar />
      </div>
    <div className={styles.container}>
      
      <div className={styles.header}>
        <img
          src={backArrow}
          alt=""
          className={styles.backArrow}
          onClick={handleBack}
        />
        <h2>Choose and Pay</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.paymentCards}>
          <div className={styles.walletBox}>
            <img src={walletIcon} alt="" className={styles.walletIcon} />
            <div className={styles.wallet}>
              <p>Wallet</p>
              <p className={styles.balance}>Available balance: ₹300</p>
            </div>
            <p className={styles.greaterThanIcon}>&gt;</p>
          </div>
          <div className={styles.dividerLine}></div>
          <div className={styles.debitCards}>
            <div className={styles.debitCard}>
              <span className={styles.debitCardIcon}>
                <i>M</i>
              </span>
              <label className={styles.debitCardName}>
                MaestroKard
                <input type="radio" name="debitCardName" value="MaestroKard" className={styles.debitCardRadio}/>
              </label>{" "}
            </div>
            <div className={styles.debitCard}>
              <span className={styles.debitCardIcon}>
                <i>P</i>
              </span>
              <label className={styles.debitCardName}>
                Paypal
                <input type="radio" name="debitCardName" value="Paypal" className={styles.debitCardRadio}/>
              </label>{" "}
            </div>
            <div className={styles.debitCard}>
              <span className={styles.debitCardIcon}>
                <i>S</i>
              </span>
              <label className={styles.debitCardName}>
                Stripe
                <input type="radio" name="debitCardName" value="Stripe" className={styles.debitCardRadio}/>
              </label>{" "}
            </div>
            <div className={styles.addDebitCard}>
                <span>+</span>
                <span>Add debit Card</span>
            </div>
          </div>
        </div>
        <div className={styles.proceed}>
            <div className={styles.amount}><span className={styles.lightText}>Amount to be payed</span><span className={styles.cost}>₹240</span></div>
            <div className={styles.dividerLine}></div>
            <button className={styles.proceedBtn} onClick={handleProceedPayment}>Proceed Payment</button>
        </div>
      </div>
    </div>
    <div className={styles.footer}>
        <Footer/>
    </div></>
  );
}

export default PaymentPage;
