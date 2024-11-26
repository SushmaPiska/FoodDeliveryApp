import React, { useEffect, useState } from "react";
import styles from "./Signin.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";

function Signin() {
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // navigate("/home");
    }
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backendError, setBackendError] = useState("");

  // const [error, setError] = useState({
  //   email: false,
  //   password: false,
  // });

  // const errorMessages = {
  //   email: {
  //     message: "Email is required",
  //     isValid: email.length > 0,
  //     onError: () => {
  //       setError((error) => ({ ...error, email: true }));
  //     },
  //   },
  //   password: {
  //     message: "Password is required",
  //     isValid: password.length > 0,
  //     onError: () => {
  //       setError((error) => ({ ...error, password: true }));
  //     },
  //   },
  // };


const handleSignin = async () => {
    // Validate fields before making the request
    if (!email || !password) {
        console.log('Email and password are required');
        return;
    }

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/auth/signin`, 
            { email, password }, 
            { withCredentials: true } // Uncomment if credentials are required
        );

        console.log("Logged in successfully", response.data);

        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response.data));
        
        // toast.success("Login successful");
        navigate("/home");
    } catch (error) {
        console.error("Error during login:", error);

        if (error.response?.data?.error) {
            console.log(error.response.data.error);
        } else {
            console.log("Network error. Please try again.");
        }
    }
};


  const handleSignup = () => {
    navigate("/");
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
          <p className={styles.inputTitle}>Email</p>
          <input
            type="email"
            placeholder="Example@email.com"
              value={email}
            className={styles.inputItem}
              onChange={(e) => setEmail(e.target.value)}
          />
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
        </div>
        <p className={styles.forgotPassword}>Forgot Password?</p>
        <button className={styles.signinBtn} onClick={handleSignin}>
          Sign in
        </button>
      </div>
      <p className={styles.bottomText}>
        Don't you have an account?{" "}
        <span className={styles.signup} onClick={handleSignup}>
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Signin;
