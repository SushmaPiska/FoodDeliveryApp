import React, { useState, useEffect } from "react";
import styles from "./EditPayMethodPopup.module.css";
import axios from "axios";
import { deletePaymentCard } from "../services/paymentCardService";

function EditPayMethodPopup({ closePopup, setIsPaymentCardsChanged, card }) {

  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  useEffect(() => {
    if (card) {
      setCardNumber(card.cardNumber || "");
      setExpiration(card.expiration || "");
      setCvc(card.cvc || "");
      setNameOnCard(card.nameOnCard || "");
    } else {
      setCardNumber("");
      setExpiration("");
      setCvc("");
      setNameOnCard("");
    }
  }, [card]);

  const handleSavePaymentCard = async () => {
    try {
      const token = localStorage.getItem("token"); 

      const endpoint = card
        ? `${import.meta.env.VITE_BASE_URL}/api/paymentCards/updatePaymentCard/${card._id}`
        : `${import.meta.env.VITE_BASE_URL}/api/paymentCards/addPaymentCard`;

      const response = await axios.post(endpoint, {
        cardNumber,
        expiration,
        cvc,
        nameOnCard,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      });

      setIsPaymentCardsChanged(true);
      closePopup();
      console.log(
        card ? "Payment card updated successfully" : "Payment card added successfully"
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error(
        error.response?.data?.error || "Error saving payment card"
      );
    }
  };

  const handleCancel = () => {
    closePopup();
  };

  const handleDelete = async () => {
    try {
      
      if (card) {
        await deletePaymentCard(card._id)
          .then((res) => console.log(res.data))
          .catch((err) =>
            console.log("Error in deleting payment card:", err.message)
          );
        setIsPaymentCardsChanged(true);
        closePopup();
      }
    } catch (error) {
      console.log("Error in deleting payment card:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>
          {card ? "Edit Payment Method" : "Add Payment Method"}
        </h2>

        <div className={styles.formGroup}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            placeholder="XXXX XXXX XXXX 1234"
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="expiration">Expiration</label>
          <input
            type="text"
            id="expiration"
            value={expiration}
            placeholder="MM/YY"
            onChange={(e) => setExpiration(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            value={cvc}
            placeholder="XXX"
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="nameOnCard">Name on Card</label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            placeholder="Mike Ross"
            onChange={(e) => setNameOnCard(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.modalActions}>
        {card && (
          <button
            type="button"
            className={`${styles.btn} ${styles.btnRemove}`}
            onClick={handleDelete}
          >
            Remove
          </button>
        )}
        <button
          type="button"
          className={`${styles.btn} ${styles.btnCancel}`}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`${styles.btn} ${styles.btnSave}`}
          onClick={handleSavePaymentCard}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditPayMethodPopup;


// import React, { useEffect, useState } from "react";
// import styles from "./EditPayMethodPopup.module.css";
// import axios from "axios";
// import { deletePaymentCard } from "../services/paymentCardService";
// function EditPayMethodPopup({ closePopup,setIsPaymentCardsChanged, card }) {
//   const [cardNumber, setCardNumber]=useState("");
//   const [expiration, setExpiration]=useState("");
//   const [cvc, setCvc]=useState("");
//   const [nameOnCard, setNameOnCard]=useState("");

//   useEffect(() => {
//     if (card) {
//       setCardNumber(card.cardNumber || "");
//       setExpiration(card.expiration || "");
//       setCvc(card.cvc || "");
//       setNameOnCard(card.nameOnCard || "");
//     } else {
//       // Clear fields if adding a new card
//       setCardNumber("");
//       setExpiration("");
//       setCvc("");
//       setNameOnCard("");
//     }
//   }, [card]);

//   const handleSavePaymentCard=async()=>{
//     try {  
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/api/paymentCards/addPaymentCard`,
//         {
//           cardNumber, expiration, cvc, nameOnCard
//         }
//       );
//       setIsPaymentCardsChanged(true)
//       closePopup();
//       console.log("payment card added successfully");
//       console.log(response)
//       return response;
//     } catch (error) {
//       console.log(error.message);
//       throw new Error(error.response?.data?.error || "Error adding payment card");
//     }
//   }
//   const handleCancel=()=>{
//     closePopup()
//   }
//   const handleDelete=async(paymentCard)=>{
//     try {
//       await deletePaymentCard(paymentCard._id)
//     .then((res)=>console.log(res.data))
//     .catch((err)=>console.log("error in deleting payment card" ,err))
//     setIsPaymentCardsChanged(true)
//     closePopup()
//     } catch (error) {
//       console.log("error in deleting payment card : ",error.message)
//     }
    
    
//   }
//   return (
//     <div className={styles.container}>
//       <div className={styles.modal}>
//         <h2 className={styles.modalTitle}>{card ? "Edit Payment Method" : "Add New Payment Method"}</h2>

//         <div className={styles.formGroup}>
//           <label htmlFor="cardNumber">Card Number</label>
//           <input
//             type="text"
//             id="cardNumber"
//             placeholder="XXXX XXXX XXXX 1234"
//             onChange={(e)=>setCardNumber(e.target.value)}
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="expiration">Expiration</label>
//           <input type="text" id="expiration" placeholder="MM/YY" onChange={(e) => setExpiration(e.target.value)}/>
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="cvc">CVC</label>
//           <input type="text" id="cvc" placeholder="XXX" onChange={(e) => setCvc(e.target.value)}/>
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="nameOnCard">Name on Card</label>
//           <input type="text" id="nameOnCard" placeholder="Mike Ross" onChange={(e) => setNameOnCard(e.target.value)}/>
//         </div>
//         </div>
//         <div className={styles.modalActions}>
//           <button type="button" className={`${styles.btn} ${styles.btnRemove}`} onClick={()=>handleDelete(card)}>
//             Remove
//           </button>
//           <button
//             type="button"
//             className={`${styles.btn} ${styles.btnCancel}`}
//             onClick={handleCancel}
//           >
//             Cancel
//           </button>
//           <button type="submit" className={`${styles.btn} ${styles.btnSave}`} onClick={handleSavePaymentCard}>
//             Save Changes
//           </button>
//         </div>
     
//     </div>

//   );
// }

// export default EditPayMethodPopup;
