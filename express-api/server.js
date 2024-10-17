import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectionDB } from "./connection/database.js";
import authenticationRoutes from "./routes/authentication.route.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allow us passing the request body as JSON
app.use(cookieParser()); // parse cookies from request headers

app.use("/api/v1/authentication", authenticationRoutes);
app.use("/api/v1/products", productRoutes);

app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost: ${PORT}`);
  connectionDB();
});
