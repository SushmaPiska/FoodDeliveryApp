import FoodCategory from "../models/foodCategory.model.js"

export const uploadCategories = async (req, res) => {
  try {
    const { foodImageUrl, foodName, restaurantCount } = req.body;

    const newFoodCategory = new FoodCategory({
      foodImageUrl: foodImageUrl,
      foodName: foodName,
      restaurantCount: restaurantCount,
    });

    if (newFoodCategory) {
      await newFoodCategory.save();
      res.status(200).json({
        message: "food category added successfully",
      });
    } else {
      res.status(400).json({ error: "Invalid food category data" });
    }
  } catch (error) {
    console.log("Error in foodCategory controller", error.message);
    res.status(500).json({ error: "foodCategory error" });
  }
};

export const getFoodCategories = async(req,res) => {
    
        try {
            const foodCategories =await FoodCategory.find()
            if(!foodCategories){
                return res.status(404).json({message:"foodCategories not found"});
            }
            res.status(200).json(foodCategories)
        } catch (error) {
            res.status(400).json({ message: "Error retrieving food categories" });
        }
    
};
