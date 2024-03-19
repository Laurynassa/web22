const Client = require("../models/client");
console.log(Client);

// crete client
// post /api/users

const createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = createClient();
