import mongoose from 'mongoose';

const RestaurantSchema= new mongoose.Schema({
    restaurantImageUrl:{
        type:String,
        required:true,
    },
    restaurantName:{
        type:String,
        required:true,
    }
    
})

const Restaurant=mongoose.model('Restaurant',RestaurantSchema);

export default Restaurant;