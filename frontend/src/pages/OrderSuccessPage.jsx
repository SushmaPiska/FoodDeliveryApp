import React from 'react'
import styles from './OrderSuccessPage.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import orderSuccessIcon from '../assets/orderSuccessIcon.png'
import { useNavigate } from 'react-router-dom'
function OrderSuccessPage() {
    const navigate=useNavigate()
    const handleHome=()=>{
        navigate('/home')
    }
  return (<>
  <div className={styles.navBar}>
            <NavBar/>
        </div>
    <div className={styles.container}>
        
        <div className={styles.body}>
            <img src={orderSuccessIcon} alt="" className={styles.orderSuccessIcon}/>
            <p className={styles.successMsg}>Order Placed Successfully</p>
            <p className={styles.lightText}>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>
            <div className={styles.orderedItems}>
                <p>Royal Cheese Burger</p>
                <p>Potato Veggies</p>
                <p>Coke Coca cola</p>
                <button className={styles.backHomeBtn} onClick={handleHome}>Back to Home</button>
            </div>
        </div>
        
    </div>
    <div className={styles.footer}>
    <Footer/>
</div></>
  )
}

export default OrderSuccessPage