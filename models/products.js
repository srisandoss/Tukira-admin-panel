"use strict";

var mongoose = require("mongoose");

var productsSchema = mongoose.Schema({
    name: String,
    description: String,
    images: String,
    acutalprice: Number
});

var Products = mongoose.model('Products', productsSchema);
module.exports = Products;