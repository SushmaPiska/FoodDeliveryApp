import React, { createContext, useState, useEffect } from "react";
import { getAddresses } from "../services/addressService";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    getAddresses()
      .then((res) => setAddresses(res.data))
      .catch((err) => console.log("Error in fetching addresses:", err));
  }, []);

  return (
    <AddressContext.Provider value={addresses}>
      {children}
    </AddressContext.Provider>
  );
};
