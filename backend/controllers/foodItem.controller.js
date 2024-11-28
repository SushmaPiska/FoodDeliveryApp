import FoodItem from "../models/foodItem.model.js";

export const uploadFoodItems = async (req, res) => {
  try {
    const {foodItemUrl, name, details, cost } = req.body;

    const newFoodItem = new FoodItem({foodItemUrl, name, details, cost });

    if (newFoodItem) {
      await newFoodItem.save();
      res.status(200).json({
        message: "food item added successfully",
      });
    } else {
      res.status(400).json({ error: "Invalid food item data" });
    }
  } catch (error) {
    console.log("Error in foodItem controller", error.message);
    res.status(500).json({ error: "foodItem error" });
  }
};

export const getFoodItems = async(req,res) => {
    try {
      const {name}=req.body;
        const foodItems =await FoodItem.find({name:name})
        if(!foodItems){
            return res.status(404).json({message:"Food Items not found"});
        }
        res.status(200).json(foodItems)
    } catch (error) {
        res.status(400).json({ message: "Error retrieving food items" });
    }
};


