import mongoose from "mongoose";

const paymentCardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
},
  cardNumber: {
    type: Number,
    required: true,
  },
  expiration: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{2}\/\d{2}$/.test(value);
      },
      message: "Expiration must be in MM/YY format.",
    },
  },
  cvc: {
    type: Number,
    required: true,
  },
  nameOnCard: {
    type: String,
    required: true,
  },
});
const PaymentCard = mongoose.model("PaymentCard", paymentCardSchema);

export default PaymentCard;
