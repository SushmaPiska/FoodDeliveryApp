import React from "react";
import styles from "./Footer.module.css";
import footLogo from "../assets/footLogo.png";
import appStore from "../assets/appstore.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import tikTok from "../assets/tikTok.png";
import snapchat from "../assets/snapchat.png";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.div1}>
          <div>
            <img src={footLogo} alt="" className={styles.footLogo} />
          </div>
          <img src={appStore} alt="" className={styles.appStore} />
          <p className={styles.address}>
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>
        <div className={styles.div2}>
          <h3>Get Exclusive Deals in your Inbox</h3>
          <div className={styles.subscribeContainer}>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className={styles.inputItem}
            />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
          <p>
            we want spam, read our <u>email policy</u>
          </p>
          <div className={styles.socials}>
            <img src={facebook} alt="" className={styles.socialIcon} />
            <img src={instagram} alt="" className={styles.socialIcon} />
            <img src={tikTok} alt="" className={styles.socialIcon} />
            <img src={snapchat} alt="" className={styles.socialIcon} />
          </div>
        </div>
        <div className={styles.div3}>
          <h3>Legal Pages</h3>
          <p>
            <u>Terms and conditions</u>
          </p>
          <p>
            <u>Privacy</u>
          </p>
          <p>
            <u>Cookies</u>
          </p>
          <p>
            <u>Modern Slavery Statement</u>
          </p>
        </div>
        <div className={styles.div4}>
          <h3>Important Links</h3>
          <p>
            <u>Get help</u>
          </p>
          <p>
            <u>Add your restaurant</u>
          </p>
          <p>
            <u>sign up to deliver</u>
          </p>
          <p>
            <u>Create a business account</u>
          </p>
        </div>
      </div>
      <div className={styles.foot}>
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms</p>
        <p>Pricing</p>
        <p>Do not sell or share my personal information</p>
      </div>
    </div>
  );
}

export default Footer;
