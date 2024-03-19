import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "Jonas",
    lastName: "Jonaitis",
    // Email: "Jonas@gmail.com",
    // Password: "Jonas123",
    // PasswordConfirmation: "Jonas123",
  },
  {
    firstName: "Tomas",
    lastName: "Tomaitis",
    age: 28,
  },
];
//visi routai prasideda su /users
router.get("/", (req, res) => {
  console.log(users);
  res.json(users);
  res.send("Hello");
});

router.post("/", (req, res) => {
  console.log(`POST ROUTE REACHED`);
  res.send(`Succes`);
});

export default router;
