const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  kayak_id: {
    type: String,
    required: [true, "Please add client name "],
  },
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please add clients phone number"],
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
    validator: function (value) {
      const pattern = /^(0[8-9]|1[0-9]|20):[0-5][0-9]$/;
      return pattern.test(value);
    },
    message: "Plaukimo laikas prasideda nuo 08:00 iki 20:00",
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
