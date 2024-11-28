import axios from 'axios'

export const getRestaurants=async()=>{
    const restaurants=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/restaurants/getRestaurants`)

    return restaurants;
}