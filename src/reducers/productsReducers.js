"use strict";

import {createStore} from 'redux';
import {connect} from 'react-redux';


//PRODUCT REDUCERS
export function productsReducers(state={
    products:[]
}, action) {
    switch(action.type) {
        case "GET_PRODUCTS":
            return {...state, products:[...action.payload]}
            break;
        case "POST_PRODUCT":
           // let products = state.products.concat(action.payload); 
            return {products:[...state.products, ...action.payload]};
            break;
        case "DELETE_PRODUCT":
            // Create a copy of the current array of products
            const currentProductToDelete = [...state.products];

            //Determine at which index in products array is the product to be deleted
            const indexToDelete = currentProductToDelete.findIndex(
                function(product) {
                    return product._id == action.payload;
                }
            )

            return {products: [...currentProductToDelete.slice(0, indexToDelete),
                ...currentProductToDelete.slice(indexToDelete + 1)]}
            break;
        case "UPDATE_PRODUCT":
            // Create a copy of the current array of products
            const currentProductToUpdate = [...state.products];

            //Determine at which index in products array is the product to be deleted
            const indexToUpdate = currentProductToUpdate.findIndex(
                function(product) {
                    return product._id === action.payload._id;
                }
            )

            // Create a new product object with the new values and with the same array index of the item we want to replace. To acheive this we will use ...spread but we could use concat method too. 
            const newProductToUpdate = {
                ...currentProductToUpdate[indexToUpdate],
                name: action.payload.name
            }
            // This log has the purpose to show you how newProductToUpdate looks like
            console.log("What is it newProductToUpdate", newProductToUpdate);

            //Use slice to remove the product at the specified index, replace with the new object and concatenate with the rest of items in the array

            return {products: [...currentProductToUpdate.slice(0, indexToUpdate), newProductToUpdate,
                ...currentProductToUpdate.slice(indexToUpdate + 1)]}
            break;
    }
    return state;
}