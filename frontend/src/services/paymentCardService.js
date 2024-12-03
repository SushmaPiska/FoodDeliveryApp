import axios from "axios";

export const getPaymentCards = async () => {
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/paymentCards/getPaymentCards`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.error("Error in getting payment cards:", error.response?.data || error.message);
    throw error; 
  }
  // const paymentCards = await axios.get(
  //   `${import.meta.env.VITE_BASE_URL}/api/paymentCards/getPaymentCards`
  // );

  // return paymentCards;
};

export const addPaymentCard = async () => {
  
  try {
    const token = localStorage.getItem("token"); 
    console.log(token)
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/paymentCards/addPaymentCard`,
      {
        cardNumber, expiration, cvc, nameOnCard
      }, 
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error adding payment card");
  }
};

export const updatePaymentCard=async(paymentCardId)=>{
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/paymentCards/updatePaymentCard/${paymentCardId}`,
      {
        cardNumber, expiration, cvc, nameOnCard
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error updating payment card");
  }
}

export const deletePaymentCard = async (paymentCardId) => {
  const token = localStorage.getItem("token"); 

  const paymentCard = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}/api/paymentCards/deletePaymentCard/${paymentCardId}`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );

  return paymentCard;
};
