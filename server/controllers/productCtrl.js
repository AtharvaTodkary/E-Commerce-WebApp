const Products = require("../models/productModel");

//Filtering, Sorting and Paginations

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    this.query.find(JSON.parse(queryStr));

    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join("");

      this.query = this.query.sort(sortBy);

    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }
  pagination() {
    //How many pages in one page
    const page = this.queryString.page * 1 || 1;
    //limits of no. of items in one page
    const limit = this.queryString.limit * 1 || 9;
    //No. of documents to be skipped after every page
    const skip = (page - 1) * limit;
    // query modified according to page to be skipped and item limit on  a page
    this.query  = this.query.skip(skip).limit(limit);
    return this;
  }
}

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      // console.log(req.query);
      //get all products from the database
      const features = new APIfeatures(Products.find(), req.query)
        .filtering()
        .sorting()
        .pagination();
      const products = await features.query;

      res.json({products: products});
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createProducts: async (req, res) => {
    try {
      //this is product info which is taken from body
      const {
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      } = req.body;

      if (!images) return res.status(400).json({ msg: "No Image upload" });
      const product = await Products.findOne({ product_id });

      //check if product exists
      if (product) {
        return res.status(400).json({ msg: "This Product already exists" });
      }

      //create a schema
      const newProduct = new Products({
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      });

      //Execute mongo entry
      await newProduct.save();
      res.json({ msg: "Product created successfully" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteProducts: async (req, res) => {
    try {
      //find the product by id and delete it
      await Products.findByIdAndDelete(req.params.id);
      req.json({ msg: "Delete Product" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateProducts: async (req, res) => {
    try {
      const { title, price, description, content, images, category } = req.body;

      if (!images) return res.status(404).json({ msg: "No Image is uploaded" });

      await Products.findByIdAndUpdate(
        { _id: req.params.id },
        {
          title: title.toLowerCase(),
          price,
          description,
          content,
          images,
          category,
        }
      );

      res.json({ msg: "Updated a Product" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = productCtrl;
