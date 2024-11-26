import axios from 'axios'

export const getFoodDeals=()=>{
    const foodDeals=axios.get('http://localhost:5000/api/deals/getFoodDeals')

    return foodDeals;
}