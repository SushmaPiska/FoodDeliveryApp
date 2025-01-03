import React, { useEffect, useState } from "react";
import styles from "./AddAddressPopup.module.css";
import addAddressIcon from "../assets/addAddressIcon.png";
import axios from "axios";
function AddAddressPopup({ closePopup,  setIsAddressChanged, address }) {
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [pincode, setPincode] = useState();
  const [phone, setPhone] = useState();
  const [fullAddress, setFullAddress] = useState();

  useEffect(() => {
    if (address) {
      setState(address.state || "");
      setDistrict(address.district || "");
      setPincode(address.pincode || "");
      setPhone(address.phone || "");
      setFullAddress(address.fullAddress || "");
    } else {
      setState("");
      setDistrict("");
      setPincode("");
      setPhone("");
      setFullAddress("");
    }
  }, [address]);

  const handleSaveAddress = async () => {
    try {
      const token = localStorage.getItem("token"); 

      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const userId = user._id;

      const endpoint = address
      ? `${import.meta.env.VITE_BASE_URL}/api/address/updateAddress/${address._id}`
      : `${import.meta.env.VITE_BASE_URL}/api/address/addAddress`;

      const response = await axios.post(
        endpoint,
        {
          userId,
          state,
          district,
          pincode,
          phone,
          fullAddress,
          isDefault: true,
        },{
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      closePopup();
      setIsAddressChanged(true)
      console.log(address? "address updated successfully":"address added successfully");
      console.log(response)
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.response?.data?.error || "Error saving address");
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={addAddressIcon} alt="" className={styles.addAddressIcon} />
        <span>{address? "Edit ":"Add "}Address</span>
      </div>
      <div className={styles.inputLine1}>
        <input
          type="dropdown"
          placeholder="State"
          className={styles.input}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="City/District"
          className={styles.input}
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pin Code"
          className={styles.input}
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <input
          type="phone"
          placeholder="Phone Number"
          className={styles.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <textarea
        name=""
        id=""
        placeholder="Enter full address"
        className={styles.inputText}
        value={fullAddress}
        onChange={(e) => setFullAddress(e.target.value)}
      ></textarea>

      <button className={styles.saveBtn} onClick={handleSaveAddress}>
        Save
      </button>
    </div>
  );
}

export default AddAddressPopup;



// import React, { useState } from "react";
// import styles from "./AddAddressPopup.module.css";
// import addAddressIcon from "../assets/addAddressIcon.png";
// import axios from "axios";
// function AddAddressPopup({ closePopup,  setIsAddressChanged }) {
//   const [state, setState] = useState();
//   const [district, setDistrict] = useState();
//   const [pincode, setPincode] = useState();
//   const [phone, setPhone] = useState();
//   const [fullAddress, setFullAddress] = useState();

//   const handleSaveAddress = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user") || "{}");
//       const userId = user._id;
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/api/address/addAddress`,
//         {
//           userId,
//           state,
//           district,
//           pincode,
//           phone,
//           fullAddress,
//           isDefault: true,
//         }
//       );
//       closePopup();
//       setIsAddressChanged(true)
//       console.log("address added successfully");
//       console.log(response)
//       return response;
//     } catch (error) {
//       console.log(error.message);
//       throw new Error(error.response?.data?.error || "Error adding address");
//     }
//   };
//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <img src={addAddressIcon} alt="" className={styles.addAddressIcon} />
//         <span>Add Address</span>
//       </div>
//       <div className={styles.inputLine1}>
//         <input
//           type="dropdown"
//           placeholder="State"
//           className={styles.input}
//           onChange={(e) => setState(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="City/District"
//           className={styles.input}
//           onChange={(e) => setDistrict(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Pin Code"
//           className={styles.input}
//           onChange={(e) => setPincode(e.target.value)}
//         />
//         <input
//           type="phone"
//           placeholder="Phone Number"
//           className={styles.input}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </div>
//       <textarea
//         name=""
//         id=""
//         placeholder="Enter full address"
//         className={styles.inputText}
//         onChange={(e) => setFullAddress(e.target.value)}
//       ></textarea>

//       <button className={styles.saveBtn} onClick={handleSaveAddress}>
//         Save
//       </button>
//     </div>
//   );
// }

// export default AddAddressPopup;
