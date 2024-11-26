import React from 'react'
import styles from './popularRestaurants.module.css'
import popularRest from '../assets/popularRest.png'
import { useNavigate } from 'react-router-dom'
function PopularRestaurants() {
    
    const navigate= useNavigate()
    const handleOpenProductPage=()=>{
        navigate('/productPage')
    }
  return (
    <div className={styles.container}>
        <h2>Popular Restaurants</h2>
        <div className={styles.body}>
        <div className={styles.card} onClick={handleOpenProductPage}>
            <img src={popularRest} alt="" className={styles.image}/>
            <p className={styles.title}>Burger King</p>
        </div>
        <div className={styles.card}>
            <img src={popularRest} alt="" className={styles.image}/>
            <p className={styles.title}>Burger King</p>
        </div>
        <div className={styles.card}>
            <img src={popularRest} alt="" className={styles.image}/>
            <p className={styles.title}>Burger King</p>
        </div>
        <div className={styles.card}>
            <img src={popularRest} alt="" className={styles.image}/>
            <p className={styles.title}>Burger King</p>
        </div>
        <div className={styles.card}>
            <img src={popularRest} alt="" className={styles.image}/>
            <p className={styles.title}>Burger King</p>
        </div>
        <div className={styles.card}>
            <img src={popularRest} alt="" className={styles.image}/>
            <p className={styles.title}>Burger King</p>
        </div></div>
    </div>
  )
}

export default PopularRestaurants