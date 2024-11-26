import FoodDeal from "../models/foodDeal.model.js";

export const uploadDeals = async (req, res) => {
  try {
    const { restaurant, discount, imageUrl } = req.body;

    const newFoodDeal = new FoodDeal({ restaurant, discount, imageUrl });

    if (newFoodDeal) {
      await newFoodDeal.save();
      res.status(200).json({
        message: "food deal added successfully",
      });
    } else {
      res.status(400).json({ error: "Invalid food deal data" });
    }
  } catch (error) {
    console.log("Error in foodDeal controller", error.message);
    res.status(500).json({ error: "foodDeal error" });
  }
};

export const getFoodDeals = async(req,res) => {
    try {
        const foodDeals =await FoodDeal.find()
        if(!foodDeals){
            return res.status(404).json({message:"foodDeals not found"});
        }
        res.status(200).json(foodDeals)
    } catch (error) {
        res.status(400).json({ message: "Error retrieving food deals" });
    }
};
