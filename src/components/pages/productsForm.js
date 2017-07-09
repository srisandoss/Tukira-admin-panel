"use restrict";
import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postProducts, deleteProducts} from '../../actions/productsActions'; 

class ProductsForm extends React.Component {

    handleSubmit() {
        const product=[{
            name:  findDOMNode(this.refs.name).value,
            description:  findDOMNode(this.refs.description).value,
            actualprice:  findDOMNode(this.refs.actualprice).value

        }];

        this.props.postProducts(product);

    }

    onDelete() {
        let productId = findDOMNode(this.refs.delete).value

        this.props.deleteProducts(productId);
    }

    render() {
        const productsList = this.props.products.map(function(productsArr){
            return (
                <option key={productsArr._id}>{productsArr._id}</option>
            )
        });
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="name">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Name"
                            ref="name" />
                    </FormGroup>
                     <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Description"
                            ref="description" />
                    </FormGroup>
                     <FormGroup controlId="actualprice">
                        <ControlLabel>Actual Price</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter actual price"
                            ref="actualprice" />
                    </FormGroup>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save Product</Button>
                </Panel>
                <Panel style={{marginTop: '25px'}}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a book id to delete</ControlLabel>
                        <FormControl ref="delete" componentClass="select" placeholder="select">
                            <option value="select">select</option>
                                {productsList}
                        </FormControl>
                    </FormGroup>
                    <Button onClick={this.onDelete.bind(this)} bsStyle="danger">Delete Product</Button>
                </Panel>
            </Well>
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
        postProducts,
        deleteProducts
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsForm);
