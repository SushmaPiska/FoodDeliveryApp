import mongoose from 'mongoose';

const FoodItemSchema=new mongoose.Schema({
    foodItemUrl:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    

})
const FoodItem=mongoose.model('FoodItem',FoodItemSchema)

export default  FoodItem;