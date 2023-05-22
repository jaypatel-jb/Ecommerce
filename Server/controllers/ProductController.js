import { Product } from "../models/ProductModel.js";
export const GetAllProduct = async (req, res) => {
  console.log("req");
  try {
    const allProduct = await Product.find();
    res.status(200).json({
      satus: "ok",
      Count: allProduct.length,
      Data: allProduct,
    });
  } catch (error) {
    res.status(404).json({
      satus: "ERRORa",
      message: error.message,
    });
  }
};
