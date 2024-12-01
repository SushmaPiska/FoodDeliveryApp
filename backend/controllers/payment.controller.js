import PaymentCard from "../models/paymentCard.model.js"
export const addPaymentCard=async(req,res)=>{
    try {
        const { cardNumber, expiration, cvc, nameOnCard } =
          req.body;
        if (!cardNumber || !expiration || !cvc || !nameOnCard) {
          return res.status(400).json({ error: "Missing required fields" });
        }
    
        const newPaymentCard = new PaymentCard({
            cardNumber, expiration, cvc, nameOnCard
        });
    
        if (newPaymentCard) {
          
    
          await newPaymentCard.save();
          res.status(200).json({
            message: "paymentCard added successfully",
          });
        } else {
          res.status(400).json({ error: "Invalid paymentCard data" });
        }
      } catch (error) {
        console.log("Error in paymentCard controller", error.message);
        res.status(500).json({ error: "paymentCard error" });
      }
}
export const getPaymentCards=async(req,res)=>{
    try {
        const paymentCards = await PaymentCard.find();
        if (!paymentCards) {
          return res.status(404).json({ message: "paymentCards not found" });
        }
        res.status(200).json(paymentCards);
      } catch (error) {
        res.status(400).json({ message: "Error retrieving paymentCards" });
      }
}

export const updatePaymentCard=async(req,res)=>{
  try {
    const { id } = req.params;
    const { cardNumber, expiration, cvc, nameOnCard } = req.body;

    
    let paymentCard = await PaymentCard.findById(id);
    console.log(paymentCard);
    if (!paymentCard) {
      return res.status(400).json({ message: "paymentCard not found" });
    }
    paymentCard = await PaymentCard.findByIdAndUpdate(
      id,
      { cardNumber, expiration, cvc, nameOnCard },
      { new: true }
    );

    res.status(200).json(paymentCard);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "paymentCard not updated" });
  }
}

export const deletePaymentCard = async (req, res) => {
    try {
      const { id } = req.params;
      const paymentCard = await PaymentCard.findById(id);
      console.log(paymentCard);
      console.log(id);
      if (!paymentCard) {
        return res.status(401).json({ message: "paymentCard not found" });
      }
  
      await PaymentCard.findByIdAndDelete(id);
  
      res.status(200).json({ message: "paymentCard deleted  successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "paymentCard not deleted" });
    }
  };