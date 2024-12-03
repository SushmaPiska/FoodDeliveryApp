import React, { createContext, useState, useEffect } from "react";
import { getAddresses } from "../services/addressService.js";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [isAddressChanged, setIsAddressChanged] = useState(false);

  const fetchAddresses = async () => {
    try {
      const res = await getAddresses();
      
      setAddresses(res);
    } catch (err) {
      console.error("Error fetching addresses:", err);
    }
  };

  useEffect(() => {
    fetchAddresses()
    .finally(()=>setIsAddressChanged(false))
    
  }, [isAddressChanged]); 

  return (
    <AddressContext.Provider value={{ addresses, setIsAddressChanged }}>
      {children}
    </AddressContext.Provider>
  );
};


// import React, { createContext, useState, useEffect } from "react";
// import { getAddresses } from "../services/addressService.js";

// export const AddressContext = createContext();

// export const AddressProvider = ({ children }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [isAddressChanged, setIsAddressChanged] = useState(false);

//   useEffect(() => {
//     getAddresses()
//       .then((res) => {
//         setAddresses(res)
//     })
//       .catch((err) => console.log("Error in fetching addresses:", err))
//       .finally(() => setIsAddressChanged(false));
//   }, [isAddressChanged]);

//   return (
//     <AddressContext.Provider value={addresses}>
//       {children}
//     </AddressContext.Provider>
//   );
// };
