'use strict';
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productshop');

var Products = require('./models/products.js');

//---->>> POST PRODUCTS <<<----
app.post('/products', function(req, res){
  console.log
  var product = req.body;

  console.log('SR::: product: ', product);

  Products.create(product, function(err, products){
    if (err) {
      throw err;
    }
    res.json(products);
  })
})

//--->>> GET PRODUCTS <<<----
app.get('/products', function(req, res) {
  Products.find(function(err, products){
    if (err) {
      throw err;
    }
    res.json(products);
  })
})

//--->>> DELETE PRODUCTS <<<---
app.delete('/products/:_id', function(req, res) {
  var query = {_id: req.params._id};

  Products.remove(query, function(err, products){
    if (err) {
      throw err;
    }
    res.json(products);
  })
})

//--->>> UPDATE PRODUCTS <<<---
app.put('/products/:_id', function(req, res) {
  var product = req.body;
  var query = req.params._id;
  // if the field doesn't exist $set will set a new field
  var update = {
    '$set': {
      name: product.name,
      description: product.description,
      image: product.image,
      actualprice: product.actualprice
    }
  }

  // When true returns the updated document
  var options = {new: true};
  
  Products.findOneAndUpdate(query, update, options, function(err, products){
    if(err) {
      throw err;
    }
    res.json(products);
  })
})

//END APIs

app.listen(3001, function(err){
  if(err) {
    return console.log(err);
  }
  console.log("API Server is listening on http://localhost:3001");
})


module.exports = app;
