import Address from "../models/address.model.js";

export const addAddress = async (req, res) => {
  try {
    const { userId, state, district, pincode, phone, fullAddress, isDefault } =
      req.body;
    if (!userId || !state || !district || !pincode || !phone || !fullAddress || !isDefault) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newAddress = new Address({
      userId,
      state,
      district,
      pincode,
      phone,
      fullAddress,
      isDefault:true,
    });

    if (newAddress) {
      const addressCount = await Address.countDocuments({ userId });
      if (addressCount === 0) {
        newAddress.isDefault = true;
      }

      if (newAddress.isDefault) {
        await Address.updateMany({ userId }, { $set: { isDefault: false } });
      }

      await newAddress.save();
      res.status(200).json({
        message: "address added successfully",
      });
    } else {
      res.status(400).json({ error: "Invalid address data" });
    }
  } catch (error) {
    console.log("Error in address controller", error.message);
    res.status(500).json({ error: "address error" });
  }
};

export const getAddresses = async (req, res) => {
  try {
    console.log(req.user.userId)
    const addresses = await Address.find({ userId: req.user.userId});

    if (!addresses) {
      return res.status(404).json({ message: "addresses not found" });
    }
    res.status(200).json(addresses);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving addresses" });
  }
};
/////////////////pending///////////
export const updateAddress=async(req,res)=>{
  try {
    const { id } = req.params;
    const {state, district, pincode, phone, fullAddress } = req.body;

    let address = await Address.findById(id);
    console.log(address);
    if (!address) {
      return res.status(400).json({ message: "address not found" });
    }
    address = await Address.findByIdAndUpdate(
      id,
      { state, district, pincode, phone, fullAddress },
      { new: true }
    );

    res.status(200).json(address);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "address not updated" });
  }
}

export const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findById(id);
    console.log(address);
    console.log(id);
    if (!address) {
      return res.status(401).json({ message: "address not found" });
    }

    await Address.findByIdAndDelete(id);

    res.status(200).json({ message: "address deleted  successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "address not deleted" });
  }
};
