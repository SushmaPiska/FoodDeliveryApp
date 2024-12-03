import React from "react";
import styles from "./Reviews.module.css";
import profilePic from "../assets/profilePic.png";
import timeSpan from "../assets/timeSpan.png";
function Reviews() {
  return (
    <div className={styles.container}>
      <div className={styles.reviewHeader}>
        <h2 className={styles.reviewHead}>Customer Reviews</h2>
        <div className={styles.prevNext}>
          <p className={styles.nextBtn}>&lt;</p>
          <p className={styles.nextBtn}>&gt;</p>
        </div>
      </div>
      <div className={styles.reviewBody}>
        <div className={styles.reviewCard}>
          <div className={styles.cardHeader}>
            <img src={profilePic} alt="" className={styles.profilePic} />

            <div className={styles.divider}></div>
            <div className={styles.custDetails}>
              <p className={styles.custName}>St Glx</p>
              <p className={styles.custLocation}>South London</p>
            </div>
            <div className={styles.ratingBox}>
              <div className={styles.fiveStar}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className={styles.timeSpan}>
                <img src={timeSpan} alt="" className={styles.clockIcon} />
                <span className={styles.date}>24th September, 2023</span>
              </div>
            </div>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.reviewText}>
              The positive aspect was undoubtedly the efficiency of the service.
              The queue moved quickly, the staff was friendly, and the food was
              up to the usual McDonald's standard – hot and satisfying.
            </p>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.cardHeader}>
            <img src={profilePic} alt="" className={styles.profilePic} />

            <div className={styles.divider}></div>
            <div className={styles.custDetails}>
              <p className={styles.custName}>St Glx</p>
              <p className={styles.custLocation}>South London</p>
            </div>
            <div className={styles.ratingBox}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <div>
                <img src={timeSpan} alt="" className={styles.clockIcon} />
                <span className={styles.date}>24th September, 2023</span>
              </div>
            </div>
          </div>
          <div className={styles.cardBody}>
            <p>
              The positive aspect was undoubtedly the efficiency of the service.
              The queue moved quickly, the staff was friendly, and the food was
              up to the usual McDonald's standard – hot and satisfying.
            </p>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.cardHeader}>
            <img src={profilePic} alt="" className={styles.profilePic} />

            <div className={styles.divider}></div>
            <div className={styles.custDetails}>
              <p className={styles.custName}>St Glx</p>
              <p className={styles.custLocation}>South London</p>
            </div>
            <div className={styles.ratingBox}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <div>
                <img src={timeSpan} alt="" className={styles.clockIcon} />
                <span className={styles.date}>24th September, 2023</span>
              </div>
            </div>
          </div>
          <div className={styles.cardBody}>
            <p>
              The positive aspect was undoubtedly the efficiency of the service.
              The queue moved quickly, the staff was friendly, and the food was
              up to the usual McDonald's standard – hot and satisfying.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
