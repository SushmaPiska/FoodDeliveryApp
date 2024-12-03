import mongoose from 'mongoose';

const CartItemSchema=new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" ,
        required: true,
    },
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