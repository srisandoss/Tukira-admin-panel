"use strict";
//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
//REACT ROUTER
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'; 

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
//IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postProducts, deleteProducts, updateProducts} from './actions/productsActions'

//STEP 1 create the store
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import ProductsList from './components/pages/productsList';
import Cart from './components/pages/cart';
import ProductsForm from './components/pages/productsForm';
import Main from './main';

const Routes = (
     <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={ProductsList} />
                <Route path="/admin" component={ProductsForm} />
                <Route path="/cart" component={Cart} />
            </Route> 
        </Router> 
    </Provider>
)

render(
   Routes, document.getElementById("app")
)
