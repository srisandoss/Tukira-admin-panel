"use strict";

//ADD TO CART
export function addToCart(product) {
    return { 
        type: "ADD_TO_CART",
        payload: product
    }
}
//UPDATE CART
export function updateCart(_id, unit, cart) {
    // Create a copy of the current array of products
    const currentProductToUpdate = cart;

    //Determine at which index in products array is the product to be deleted
    const indexToUpdate = currentProductToUpdate.findIndex(
        function(product) {
            return product._id === _id;
        }
    )

    const newProductToUpdate = {
        ...currentProductToUpdate[indexToUpdate],
        quantity: currentProductToUpdate[indexToUpdate].quantity + unit
    }
    
    let cartUpdate = [...currentProductToUpdate.slice(0, indexToUpdate), newProductToUpdate,
        ...currentProductToUpdate.slice(indexToUpdate + 1)]
    return { 
        type: "UPDATE_CART",
        payload: cartUpdate
    }
}
//DELETE CART
export function deleteCartItem(cart) {
    return {
        type: "DELETE_CART_ITEM",
        payload: cart
    }
}