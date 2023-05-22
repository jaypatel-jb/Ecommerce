import express from "express";
import { GetAllProduct } from "../controllers/ProductController.js";
const ProductRoute = express.Router();
ProductRoute.route("/").get(GetAllProduct);
export default ProductRoute;
