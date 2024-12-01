import Address from "../models/address.model.js";

export const addAddress = async (req, res) => {
  try {
    const { userId, state, district, pincode, phone, fullAddress, isDefault } =
      req.body;
    // if (!itemUrl || !itemCount || !name || !cost) {
    //   return res.status(400).json({ error: "Missing required fields" });
    // }

    const newAddress = new Address({
      userId,
      state,
      district,
      pincode,
      phone,
      fullAddress,
      isDefault,
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
    const addresses = await Address.find();
    if (!addresses) {
      return res.status(404).json({ message: "addresses not found" });
    }
    res.status(200).json(addresses);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving addresses" });
  }
};

export const updateAddress=async(req,res)=>{
  try {
    const { id } = req.params;
    const { title, priority, assignee, checkList, dueDate } = req.body;

    console.log(req.user);
    const assigneeId = mongoose.Types.ObjectId.isValid(assignee)
      ? mongoose.Types.ObjectId(assignee)
      : null;

    let task = await Task.findById(id);
    console.log(task);
    if (!task) {
      return res.status(400).json({ message: "Job not found" });
    }
    task = await Task.findByIdAndUpdate(
      id,
      { title, priority, assignee: assigneeId, checkList, dueDate },
      { new: true }
    );

    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Task not updated" });
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
