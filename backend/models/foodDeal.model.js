import mongoose from 'mongoose';

const FoodDealSchema=new mongoose.Schema({
    restaurant:{
        type:String,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }

})
const FoodDeal=mongoose.model('FoodDeal',FoodDealSchema)

export default  FoodDeal;