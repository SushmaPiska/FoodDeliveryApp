import React from "react";
import styles from "./Signup.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate=useNavigate()
  const handleSignin=()=>{
    navigate('/Signin')
  }
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.body}>
        <h2 className={styles.head}>Welcome Back 👋</h2>
        <p className={styles.welcomeText}>
          Today is a new day. It's your day. You shape it. Sign in to start
          ordering.
        </p>

        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Name</p>
          <input
            type="text"
            placeholder="eg. John A"
            className={styles.inputItem}
            //   onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Phone Number</p>
          <input
            type="phone"
            placeholder="Enter your 10 digit mobile number"
            className={styles.inputItem}
            //   onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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

        <button className={styles.signupBtn}>Sign up</button>
      </div>
      <p className={styles.bottomText}>
        Already have an account? <span className={styles.signin} onClick={handleSignin}>Sign in</span>
      </p>
    </div>
  );
}

export default Signup;
