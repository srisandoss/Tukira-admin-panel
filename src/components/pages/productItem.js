"use restrict";
import React from 'react';
import {Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, updateCart} from '../../actions/cartActions';

class ProductItem extends React.Component {
    handleCart() {
        const product= [...this.props.cart, {
            _id: this.props._id,
            name: this.props.name,
            description: this.props.description,
            actualprice: this.props.actualprice,
            quantity: 1
        }]

        //CHECK IF CART IS EMPTY
        if (this.props.cart.length > 0) {
            let _id = this.props._id;

            let cartIndex = this.props.cart.findIndex(function(cart){
                return cart._id === _id;
            })

            console.log("SR::: cartIndex: ", cartIndex);

            //IF RETURNS -1 THERE ARE NO ITEMS WITH SAME ID
            if (cartIndex === -1) {
                this.props.addToCart(product);
            } else {
                //WE NEED TO UPDATE QUANTITY
                this.props.updateCart(_id, 1, this.props.cart);
            }

            // IF RETURNS -1 THERE ARE NO ITEMS WITH SAME ID
        } else {
            this.props.addToCart(product);
        }
    }
    render() {
        return(
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{this.props.name}</h6>
                        <p>{this.props.description}</p>
                        <h6>Rs. {this.props.actualprice}</h6>
                        <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Buy Now</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToCart: addToCart,
        updateCart: updateCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);