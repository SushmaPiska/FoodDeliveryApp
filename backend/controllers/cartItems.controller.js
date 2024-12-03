import CartItem from "../models/cartItem.model.js";

export const addToCart = async (req, res) => {
  try {
    const {itemUrl, itemCount, name, cost } = req.body;
   
    if (!itemCount || !name || !cost) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    let cartItem = await CartItem.findOne({userId:req.user.userId, name: name });

    if (cartItem) {
      cartItem = await CartItem.findOneAndUpdate(
        { name },
        { itemCount: cartItem.itemCount + 1 },
        { new: true }
      );

      return res
        .status(200)
        .json(
          { message: "cartItem  already  exists, so raised the count", cartItem }
         
        );
    }
    const newCartItem = new CartItem({userId:req.user.userId,itemUrl, itemCount, name, cost });

    if (newCartItem) {
      await newCartItem.save();
      res.status(200).json({
        message: "item added to cart successfully",
      });
    } else {
      res.status(400).json({ error: "Invalid cart item data" });
    }
  } catch (error) {
    console.log("Error in cartItem controller", error.message);
    res.status(500).json({ error: "cartItem error" });
  }
};

export const getCartItems = async (req, res) => {
  try {
    // const { name } = req.body;
    const cartItems = await CartItem.find({ userId: req.user.userId});
    if (!cartItems) {
      return res.status(404).json({ message: "Cart Items not found" });
    }
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving cart items" });
  }
};

export const deleteCartItem=async (req, res)=>{
  try {
    const { id } = req.params;
    const cartItem = await CartItem.findById(id);
    console.log(cartItem);
    console.log(id)
    if (!cartItem) {
      return res.status(401).json({ message: "cartItem not found" });
    }
    console.log("hello")
    if(cartItem.itemCount>1){
      await CartItem.findByIdAndUpdate(id,{itemCount:cartItem.itemCount-1});
    }else{
      await CartItem.findByIdAndDelete(id)
    }

    res.status(200).json({ message: "cartItem deleted  successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "cartItem not deleted" });
  }
}
