const Contact = require("../model/userModel");

module.exports.AddContact = async (req, res) => {
  try {
    const { email, name, number, status } = req.body;

    const existingUser = await Contact.findOne({ email });

    if (existingUser) {
      return res.status(401).json({
        success: false,
        message: "Email already exists",
      });
    }

    const newContact = await Contact.create({
      email,
      name,
      number,
      status,
    });

    res.status(201).json({
      success: true,
      data: newContact,
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports.DeleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: "Contact deleted successfully" });
};

module.exports.UpdateContact = async (req, res) => {
  const updateDetails = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    status: req.body.status,
  };

  console.log(req.params.id);
  console.log(updateDetails);

  const user = await Contact.findByIdAndUpdate(req.params.id, updateDetails, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    user,
  });
};

module.exports.AllContact = async (req, res) => {
  try {
    const contacts = await Contact.find(); // Assuming you are using Mongoose for MongoDB
    res.status(201).json({
      success: true,
      contacts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.SingleContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id); // Assuming you are using Mongoose for MongoDB
    res.status(201).json({
      success: true,
      contact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
