import React, { useEffect, useState } from 'react'
import styles from './PopularRestaurants.module.css'
import popularRest from '../assets/popularRest.png'
import { useNavigate } from 'react-router-dom'
import { getRestaurants } from '../services/getRestaurants'
function PopularRestaurants() {
    const [restaurants,setRestaurants]=useState([])
    useEffect(()=>{
        getRestaurants().then(res=>setRestaurants(res.data)).catch(err=>console.log("error in getting  restaurants", err))
    },[])
    
    const navigate= useNavigate()
    const handleOpenProductPage=()=>{
        navigate('/productPage')
    }
  return (
    <div className={styles.container}>
        <h2>Popular Restaurants</h2>
        <ul className={styles.body}>
        {restaurants?.map((restaurant,key)=>(
            <li key={key} className={styles.card} onClick={handleOpenProductPage}>
                 <img src={restaurant.restaurantImageUrl} alt="" className={styles.image}/>
                 <p className={styles.title}>{restaurant.restaurantName}</p>
            </li>
        ))}
        
        </ul>
    </div>
  )
}

export default PopularRestaurants