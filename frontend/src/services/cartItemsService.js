import axios from 'axios'

export const getCartItems=async()=>{
    const cartItems=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/cartItems/getCartItems`)

    return cartItems;
}

export const addToCart = async (item) => {
    try {
      console.log(item.name)
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/cartItems/addToCart`, {
        itemUrl:item.foodItemUrl,
        itemCount: 1,
        name: item.name,
        cost: item.cost,
         // Default quantity
      });
      return response;
    } catch (error) {
      throw new Error(error.response?.data?.error || "Error adding item to cart");
    }
  };

  export const deleteCartItem=async(itemId)=>{
    const deleteItem=await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/cartItems/deleteCartItem/${itemId}`)

    return deleteItem;

  }