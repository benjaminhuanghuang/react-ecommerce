/*
    Copy inline from bootstrap 3.37
    https://getbootstrap.com/docs/3.3/css/#forms
*/

import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import CategorySelector from './category-selector.jsx';

//
import Product from 'service/product-service.jsx'
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: 0,
            parentCategoryId: 0,
        }
    }

    onCategoryChange(categoryId, parentCategoryId) {
        console.log("Category changed", categoryId, parentCategoryId);
        this.setState({
            categoryId,
            parentCategoryId
        });
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Add Product" />
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product Name</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" placeholder="Product name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product info</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" placeholder="product info" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product category</label>
                        <CategorySelector onCategoryChange={(categoryId, parentCategoryId) => this.onCategoryChange(categoryId, parentCategoryId)} />
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product price</label>
                        <div className="col-sm-3">
                            <div className="input-group">
                                <input type="number" className="form-control" placeholder="product price" />
                                <span className="input-group-addon">$</span>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product inventory</label>
                        <div className="col-sm-3">
                            <div className="input-group">
                                <input type="number" className="form-control" placeholder="product inventory" />
                                <span className="input-group-addon">N</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product Image</label>
                        <div className="col-sm-3">

                        </div>
                    </div>       <div className="form-group">
                        <label className="col-sm-2 control-label">Product detail</label>
                        <div className="col-sm-3">

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={() => { }}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}



export default ProductSave;