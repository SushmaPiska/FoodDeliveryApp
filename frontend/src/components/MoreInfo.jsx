import React from "react";
import styles from "./MoreInfo.module.css";
import tracking from "../assets/tracking.png";
import idVerified from "../assets/idVerified.png";
import moreInfoClock from "../assets/moreInfoClock.png";
function MoreInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.deliveryInfo}>
        <div className={styles.header}>
          <img src={tracking} alt="" />
          <span className={styles.head}>Delivery information</span>
        </div>
        <p>
          <span className={styles.subHead}>Monday:</span> 12:00 AM–3:00 AM, 8:00
          AM–3:00 AM
        </p>
        <p>
          {" "}
          <span className={styles.subHead}>Tuesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span className={styles.subHead}>Wednesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span className={styles.subHead}>Thursday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span className={styles.subHead}>Friday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          {" "}
          <span className={styles.subHead}>Saturday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          {" "}
          <span className={styles.subHead}>Sunday:</span> 8:00 AM–12:00 AM
        </p>
        <p><span className={styles.subHead}>Estimated time until delivery:</span> 20 min</p>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.header}>
        <img src={idVerified} alt="" />
        <span className={styles.head}>Contact information</span>
        </div>
        <p>
          If you have allergies or other dietary restrictions, please contact
          the restaurant. The restaurant will provide food-specific information
          upon request.{" "}
        </p>
        <p className={styles.subHead}>Phone number</p>
        <p className={styles.phone}>+934443-43</p>
        <p className={styles.subHead}>Website</p>
        <p className={styles.website}>http://mcdonalds.uk/</p>
      </div>
      <div className={styles.timings}>
        <div className={styles.header}>
        <img src={moreInfoClock} alt="" />
        <span className={styles.head}>Operational Times</span>
        </div>
        <p>
          <span className={styles.subHead}>Monday:</span> 8:00
          AM–3:00 AM
        </p>
        <p>
          {" "}
          <span className={styles.subHead}>Tuesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          {" "}
          <span className={styles.subHead}>Wednesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span className={styles.subHead}>Thursday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span className={styles.subHead}>Friday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          {" "}
          <span className={styles.subHead}>Saturday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          {" "}
          <span className={styles.subHead}>Sunday:</span> 8:00 AM–12:00 AM
        </p>
      </div>
    </div>
  );
}

export default MoreInfo;
