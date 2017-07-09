"use strict";

import {combineReducers} from 'redux';

// HERE IMPORT REDUCERS TO BE COMBINED
import {productsReducers} from './productsReducers';
import {cartReducers} from './cartReducers';

//HERE COMBINE THE REDUCERS
export default combineReducers({
    products: productsReducers,
    cart: cartReducers
})
