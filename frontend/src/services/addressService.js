import axios from "axios";

export const getAddresses = async () => {
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/address/getAddresses`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.error("Error in getting addresses:", error.response?.data || error.message);
    throw error; 
  }
  // const addresses = await axios.get(
  //   `${import.meta.env.VITE_BASE_URL}/api/address/getAddresses`
  // );

  // return addresses;
};

export const addAddress = async (address) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/address/addAddress`,
      {
        userId: user._id,
        state: address.state,
        district: address.district,
        pincode: address.pincode,
        phone: address.phone,
        fullAddress: address.fullAddress,
        isDefault: address.isDefault,
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error adding address");
  }
};

export const deleteAddress = async (addressId) => {
  const token = localStorage.getItem("token"); 

  const address = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}/api/address/deleteAddress/${addressId}`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );

  return address;
};
