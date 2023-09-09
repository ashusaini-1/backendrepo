const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
