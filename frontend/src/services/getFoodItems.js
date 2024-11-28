import axios from 'axios'

export const getFoodItems=async(name)=>{
    const foodItems=await axios.post(`${import.meta.env.VITE_BASE_URL}/api/foodItems/getFoodItems`,{
        name: name,
    })

    return foodItems;
}