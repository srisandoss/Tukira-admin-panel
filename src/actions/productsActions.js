"use strict";
import axios from 'axios';

//GET A PRODUCT
export function getProducts(product) {
    return function(dispatch) {
        axios.get("/api/products")
            .then(function(response){
                dispatch({type: "GET_PRODUCTS", payload:response.data})
            })
            .catch(function(err){
                dispatch({type:"GET_PRODUCTS_REJECTED", payload:err})
            })
    }
}

//POST A PRODUCT
export function postProducts(product) {
    return function(dispatch) {
        axios.post("/api/products", product)
            .then(function(response){
                dispatch({type:"POST_PRODUCT", payload:response.data})
            })
            .catch(function(err){
                dispatch({type:"POST_PRODUCT_REJECTED", payload:"there was an error while posting a new book"})
            })
    }
}

//DELETE A PRODUCT
export function deleteProducts(id) {
    return function(dispatch) {
        axios.delete("/api/products/"+id)
            .then(function(response) {
                dispatch({type:"DELETE_PRODUCT", payload:id})
            })
            .catch(function(err){
                dispatch({type:"DELETE_PRODUCT_REJECTED", payload:err})
            })
    }
}
//UPDATE A PRODUCT
export function updateProducts(product) {
    return {
        type: "UPDATE_PRODUCT",
        payload: product
    }
}