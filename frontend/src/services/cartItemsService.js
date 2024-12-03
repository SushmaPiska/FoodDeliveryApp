import axios from 'axios'

export const getCartItems=async()=>{
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/cartItems/getCartItems`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.error("Error in getting cart items:", error.response?.data || error.message);
    throw error; 
  }
    // const cartItems=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/cartItems/getCartItems`)

    // return cartItems;
}

export const addToCart = async (item) => {
    try {
      const token = localStorage.getItem("token"); 

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/cartItems/addToCart`,
        {
          itemUrl: item.foodItemUrl,
          itemCount: 1, 
          name: item.name,
          cost: item.cost,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Error adding item to cart");
    }
  };

  export const deleteCartItem=async(itemId)=>{
    const token = localStorage.getItem("token"); 

    const deleteItem=await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/cartItems/deleteCartItem/${itemId}`,
    {
      headers: {
        Authorization: `${token}`,
      },
    })

    return deleteItem;

  }