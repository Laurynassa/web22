// import express from "express";
// import bodyParser from "body-parser";
// // import router from "./routes/usersRoutes.js";
// import mongoose from "mongoose";
// // import Product from "./Models/ProductModel.js";
// import User from "./Models/userModel.js";
// const app = express();

// app.use(bodyParser.json());

// // app.use("/", router);
// //Pridedami vartotojai i DB
// app.post(`/users`, async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(200).json(newUser);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// });
// // //idedami produktai i DB
// // app.post(`/products`, async (req, res) => {
// //   try {
// //     const newProduct = await Product.create(req.body);
// //     res.status(200).json(newProduct);
// //   } catch (error) {
// //     console.log(error.message);
// //     res.status(500).json({ message: error.message });
// //   }
// // });
// app.get("/", (req, res) => {
//   res.send(`Hello form homepage.`);
// });

// const port = 3000;

// mongoose
//   .connect(
//     `mongodb+srv://Admin:CUDpNVXM76JZmbiL@web22.l7danvr.mongodb.net/Web22?retryWrites=true&w=majority&appName=Web22
// `
//   )
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(port, () =>
//       console.log(`Serveris paleistas adresu: http://localhost:${port}/`)
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });
