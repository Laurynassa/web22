import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/usersRoutes.js";
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
// users
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send(`Hello form homepage.`);
});

app.listen(PORT, () =>
  console.log(`Serveris paleistas adresu: http://localhost:${PORT}/`)
);
