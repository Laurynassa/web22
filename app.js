const express = require("express");
const app = express();
const Client = require("./models/client.js");
const ConnectDB = require("./config/db");
const Reservation = require("./models/reservation.js");
require("dotenv").config();

ConnectDB();

app.use(express.json());
app.post("/users", (req, res) => {
  const client = new Client({
    clientName: req.body.clientName,
    clientPhone: req.body.clientPhone,
  });
  client.save();
  console.log(req.body);
  res.send(req.body);
});

app.post("/reservation", (req, res) => {
  let formatedDate = new Date(req.body.date);
  const reservation = new Reservation({
    kayak_id: req.body.kayak_id,
    client_id: req.body.client_id,
    date: formatedDate.toISOString(),
    time: req.body.time,
  });
  try {
    reservation.save();
    res.send(req.body);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is tuning on http://localhost:5000/ " + process.env.PORT);
});
