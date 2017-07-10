"use strict";

var mongoose = require("mongoose");

var productsSchema = mongoose.Schema({
    name: String,
    description: String,
    images: String,
    actualprice: Number
});

var Products = mongoose.model('Products', productsSchema);
module.exports = Products;