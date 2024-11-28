import mongoose from 'mongoose';

const FoodCategorySchema= new mongoose.Schema({
    foodImageUrl:{
        type:String,
        required:true,
    },
    foodName:{
        type:String,
        required:true,
    },
    restaurantCount:{
        type:Number,
        required:true
    }
})

const FoodCategory=mongoose.model('FoodCategory',FoodCategorySchema);
export default FoodCategory;