"use strict";

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts} from '../../actions/productsActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import ProductItem from './productItem';
import ProductsForm from './productsForm';
import Cart from './cart';

class ProductsList extends React.Component{
    componentDidMount() {
        //Dispatch an action
        this.props.getProducts();
    }
    render() {
        console.log("Are we accessing the state", this.props.products);

        const productsList = this.props.products.map(function(productsArr) {
            return (
                <Col xs={12} sm={6} md={4} key={productsArr._id}>
                    <ProductItem
                        _id= {productsArr._id} 
                        name= {productsArr.name}
                        description={productsArr.description}
                        actualprice={productsArr.actualprice} />
                </Col>
            )
        })
        return (
            <Grid>
                <Row>
                    <Cart />
                </Row>
                
                <Row>
                    <Col xs={12} sm={6}>
                        <ProductsForm />
                    </Col>
                    {productsList}
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProducts: getProducts
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);