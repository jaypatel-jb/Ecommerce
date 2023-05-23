import express from "express";
import { GetSpecificCatagory } from "../controllers/GetSpecificCatagory.js";
import { GetSpecificProducts } from "../controllers/GetSpecificProducts.js";
const SingleProductRoute = express.Router();
SingleProductRoute.route("/:category").get(GetSpecificCatagory);
SingleProductRoute.route("/:category/:id").get(GetSpecificProducts);
export default SingleProductRoute;
