import { Product } from "../models/ProductModel.js";
export const GetSpecificCatagory = async (req, res) => {
  try {
    const categoryProduct = await Product.find({
      "data.category": req.params.category,
    });
    console.log("categoryProduct")
    res.status(200).json(categoryProduct);
  } catch (error) {
    res.status(404).json({
      satus: "ERRORa",
      message: error.message,
    });
  }
};
