import React, { useState } from "react";
import styles from "./Signup.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backendError, setBackendError] = useState("");

  const [error, setError] = useState({
    name: { message: "", isVisible: false },
    phone: { message: "", isVisible: false },
    email: { message: "", isVisible: false },
    password: { message: "", isVisible: false },
  });

  const frontendErrorMessages = {
    name: {
      message: "Name is required",
      isValid: name.length > 0,
    },
    phone:{
      message: "Phone is required",
      isValid: email.length > 0,
    },
    email: {
      message: "Email is required",
      isValid: email.length > 0,
    },
    password: {
      message: "Password is required",
      isValid: password.length > 0,
    }
  };


  const navigate = useNavigate();
  const handleSignup = async () => {
    let isError = false;
    setBackendError("")
    setError({
      name: { message: "", isVisible: false },
      phone: { message: "", isVisible: false },
      email: { message: "", isVisible: false },
      password: { message: "", isVisible: false },
      
    });

    Object.keys(frontendErrorMessages).forEach((key) => {
      if (!frontendErrorMessages[key].isValid) {
        isError = true;
        setError((prevError) => ({
          ...prevError,
          [key]: {
            message: frontendErrorMessages[key].message,
            isVisible: true,
          },
        }));
      }
    });
    if (!isError) {
    try {
      await axios.post(`${baseUrl}/api/auth/signup`, {
        name,
        phone,
        email,
        password
      });
      // toast.success("Registration successful!");
      navigate("/signin");
    } catch (err) {
      // setLoading(false);
      if (err.response) {
        console.log(err.response.data.error);

        // setBackendError(err.response.data.error);
      } else {
        console.log("Error details:", err);
        // setBackendError("Network error. Please try again.");
      }
    }}
  };
  const handleSignin = () => {
    navigate("/signin");
  };
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
            value={name}
            className={styles.inputItem}
              onChange={(e) => setName(e.target.value)}
          />
          {error.name.isVisible && (
          <p className={styles.errorMessage}>* {error.name.message}</p>
        )}
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Phone Number</p>
          <input
            type="phone"
            placeholder="Enter your 10 digit mobile number"
            value={phone}
            className={styles.inputItem}
              onChange={(e) => setPhone(e.target.value)}
          />
          {error.phone.isVisible && (
          <p className={styles.errorMessage}>* {error.phone.message}</p>
        )}
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Email</p>
          <input
            type="email"
            placeholder="Example@email.com"
              value={email}
            className={styles.inputItem}
              onChange={(e) => setEmail(e.target.value)}
          />
          {error.email.isVisible && (
          <p className={styles.errorMessage}>* {error.email.message}</p>
        )}
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Password</p>
          <input
            type="password"
            placeholder="At least 8 characters"
            value={password}
            className={styles.inputItem}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password.isVisible && (
            <p className={styles.errorMessage}>* {error.password.message}</p>
          )}
        </div>
        {backendError && <div className={styles.errorMessage}>* {backendError}</div>}
        <button className={styles.signupBtn} onClick={handleSignup}>
          Sign up
        </button>
      </div>
      <p className={styles.bottomText}>
        Already have an account?{" "}
        <span className={styles.signin} onClick={handleSignin}>
          Sign in
        </span>
      </p>
    </div>
  );
}

export default Signup;
