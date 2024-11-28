import axios from 'axios'

export const getFoodCategories=async()=>{
    const foodCategories=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/foodCategories/getFoodCategories`)

    return foodCategories;
}