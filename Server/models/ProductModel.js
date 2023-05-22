import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECT_DB, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export const ProductSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  title: {
    type: String,
    require: [true, "title is require field"],
    trim: true,
  },

  description: {
    type: String,
    require: [true, "description is require field"],
    trim: true,
  },
  price: {
    type: Number,
    require: [true, "price is require field"],
    trim: true,
  },
  discountPercentage: {
    type: Number,
    trim: true,
  },
  rating: {
    type: Number,
    require: [true, "rating is require field"],
    trim: true,
  },
  stock: {
    type: Number,
    require: [true, "stock is require field"],
    trim: true,
  },
  brand: {
    type: String,
    require: [true, "brand is require field"],
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    require: [true, "category is require field"],
    trim: true,
  },
  thumbnail: {
    type: String,
    require: [true, "thumbnail is require field"],
    trim: true,
  },

  images: {
    type: [String],
    require: [true, "images is require field"],
    trim: true,
  },
});
export const Product = mongoose.model("products", ProductSchema);
