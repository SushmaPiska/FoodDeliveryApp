import React from 'react'
import styles from './WelcomePage.module.css'
import homeFood from "../assets/homeFood.png";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from 'react-router-dom';
function WelcomePage() {

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.leftContainer}>
          
        <Outlet />
          {/* <Signin /> */}
          {/* <Signup/> */}
        </div>
        <div className={styles.rightContainer}>
          <img src={homeFood} alt="" className={styles.homeFoodImg} />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  )
}

export default WelcomePage