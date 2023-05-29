import { Product } from "../models/ProductModel.js";
export const GetSpecificProducts = async (req, res) => {
  console.log(req.params.id);
  console.log(req.params.category);
  try {
    const categoryProduct = await Product.find({
     data:{$elemMatch:{"price" : 19}}});
    if (categoryProduct.length === 0) {
      res.status(404).json({
        status: "Error",
        message: `product in ${req.params.category} with ${req.params.id} not found`
      })
      return
    }
    res.status(200).json(categoryProduct);
  } catch (error) {
    res.status(404).json({
      satus: "ERROR",
      message: error.message,
    });
  }
};
