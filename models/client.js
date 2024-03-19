const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, "Please add client name "],
  },
  clientPhone: {
    type: String,
    required: [true, "Please add clients phone number"],
  },
  //   reservations: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "reservations",
  //   },
});

module.exports = mongoose.model("Client", clientSchema);
