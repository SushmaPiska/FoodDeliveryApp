import React from "react";
import styles from "./Signin.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate=useNavigate()

  const handleSignin=()=>{
    navigate('/home')
  }

  const handleSignup=()=>{
    navigate('/')
  }
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.body}>
        <h2 className={styles.head}>Welcome Back  👋</h2>
        <p className={styles.welcomeText}>
          Today is a new day. It's your day. You shape it. Sign in to start
          ordering.
        </p>

        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Email</p>
          <input
            type="email"
            placeholder="Example@email.com"
            //   value={email}
            className={styles.inputItem}
            //   onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Password</p>
          <input
            type="password"
            placeholder="At least 8 characters"
            className={styles.inputItem}
          />
        </div>
        <p className={styles.forgotPassword}>Forgot Password?</p>
        <button className={styles.signinBtn} onClick={handleSignin}>
        Sign in
      </button>
      </div>
      <p className={styles.bottomText}>Don't you have an account? <span className={styles.signup} onClick={handleSignup}>Sign up</span></p>
      
    </div>
  );
}

export default Signin;
