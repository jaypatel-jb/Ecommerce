import express from "express";
import { GetSpecificCatagory } from "../controllers/GetSpecificCatagory.js";
const SingleProductRoute = express.Router();
SingleProductRoute.route("/:category").get(GetSpecificCatagory);
export default SingleProductRoute;
