import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    state: {
         type: String, 
         required: true 
        }, 
    district: { 
        type: String, 
        required: true 
    },
    pincode: { 
        type: String, 
        required: true
     },
     phone:{
        type:Number,
        required: true
     },
     fullAddress:{
        type: String, 
        required: true
     },
    isDefault: { 
        type: Boolean, 
        default: false 
    }, 
  },
  { timestamps: true }
);

const Address=mongoose.model('Address',AddressSchema)

export default  Address;
