import express from "express";
import { getProducts } from "../controller/product.controller.js";
import {
  protectedRoute,
  adminRoute,
} from "../middleware/authentication.middleware.js";

const router = express.Router();

//router.post("/", productRoute, adminRoute, createProduct);
router.get("/", protectedRoute, adminRoute, getProducts);
// router.get("/featured", getFeaturedProducts);
// router.get("/category/:category", getProductsByCategory);
// router.get("/recommendations", getProductRecommendedProducts);
// router.patch("/:id", toggleFeaturedProduct);
// router.delete("/:id", deleteProduct);

export default router;
