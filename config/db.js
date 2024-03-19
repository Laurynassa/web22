const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {});
    console.log("Connected to the database...");
  } catch (err) {
    console.error("Connection to the database failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
