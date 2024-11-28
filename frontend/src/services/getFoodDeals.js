import axios from 'axios'

export const getFoodDeals=async()=>{
    const foodDeals=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/deals/getFoodDeals`)

    return foodDeals;
}