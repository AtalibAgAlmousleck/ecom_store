import Product from "../model/product.model.js";

export const getProducts = async function (req, res) {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(`Error getting products ${error.message}`);
    res.status(500).json({ message: `Server error ${error.message}` });
  }
};
