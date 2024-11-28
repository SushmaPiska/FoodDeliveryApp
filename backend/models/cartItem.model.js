import mongoose from 'mongoose';

const CartItemSchema=new mongoose.Schema({
    itemUrl:{
        type:String,
        required:true
    },
    itemCount:{
        type:Number,
        required:true,
        default:1
    },
    name:{
        type:String,
        required:true
    },
    
    cost:{
        type:Number,
        required:true
    },
    

})
const CartItem=mongoose.model('CartItem',CartItemSchema)

export default  CartItem;