
import Restaurant from "../models/restaurant.model.js";

export const uploadRestaurant = async (req, res) => {
  try {
    const { restaurantImageUrl, restaurantName} = req.body;

    const newRestaurant = new Restaurant({
        restaurantImageUrl: restaurantImageUrl,
        restaurantName: restaurantName
    });

    if (newRestaurant) {
      await newRestaurant.save();
      res.status(200).json({
        message: "restaurant added successfully",
      });
    } else {
      res.status(400).json({ error: "Invalid restaurant data" });
    }
  } catch (error) {
    console.log("Error in restaurant controller", error.message);
    res.status(500).json({ error: "restaurant error" });
  }
};

export const getRestaurants = async(req,res) => {
    
        try {
            const restaurants =await Restaurant.find()
            if(!restaurants){
                return res.status(404).json({message:"restaurants not found"});
            }
            res.status(200).json(restaurants)
        } catch (error) {
            res.status(400).json({ message: "Error retrieving restaurants" });
        }
    
};
