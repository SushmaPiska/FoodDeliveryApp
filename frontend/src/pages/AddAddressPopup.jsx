import React from "react";
import styles from "./AddAddressPopup.module.css";
import addAddressIcon from "../assets/addAddressIcon.png";
function AddAddressPopup({closePopup}) {
    const handleSave=()=>{
        closePopup()
    }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={addAddressIcon} alt="" className={styles.addAddressIcon}/>
        <span>Add Address</span>
      </div>
      <div className={styles.inputLine1}>
        <input type="dropdown" placeholder="State" className={styles.input} />
        <input type="text" placeholder="City/District" className={styles.input} />
        <input type="text"  placeholder="Pin Code" className={styles.input} />
        <input type="phone" placeholder="Phone Number" className={styles.input} />
      </div>
      <textarea name="" id="" placeholder="Enter full address" className={styles.inputText}>

      </textarea>
      
      <button className={styles.saveBtn} onClick={handleSave}>Save</button>
    </div>
  );
}

export default AddAddressPopup;
