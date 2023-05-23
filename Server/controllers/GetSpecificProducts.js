import { Product } from "../models/ProductModel.js";
export const GetSpecificProducts = async (req, res) => {
  try {
    const categoryProduct = await Product.findOne(
      {},
      { "data.$": { $elemMatch: { id: 82 } } }
    );
    res.status(200).json(categoryProduct);
  } catch (error) {
    res.status(404).json({
      satus: "ERRORa",
      message: error.message,
    });
  }
};
