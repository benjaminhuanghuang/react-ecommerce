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
import './save.scss';
//
import Product from 'service/product-service.jsx'
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
const _product = new Product();

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.pid,
            name: '',
            subtitle: '',
            categoryId: 0,
            parentCategoryId: 0,
            subImages: [],
            price: '',
            stock: '',
            detail: '',
            status: 1   // available 
        }
    }

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct() {
        if (this.state.id) {
            _product.getProduct(this.state.id).then(res => {
                let images = res.subImages.split(',');
                res.subImages = images.map(imgUri => {
                    return {
                        uri: imgUri,
                        url: res.imageHost + imgUri
                    }
                });
                this.setState(res);
            }, (errMsg) => {
                _mm.error.Tips(errMsg);
            });
        }
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Add Product" />
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product Name</label>
                        <div className="col-sm-5">
                            <p className="form-control-static">{this.state.name}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product info</label>
                        <div className="col-sm-5">
                            <p className="form-control-static">{this.state.subtitle}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product category</label>
                        <CategorySelector readOnly categoryId={this.state.categoryId} parentCategoryId={this.state.parentCategoryId} />
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product price</label>
                        <div className="col-sm-3">
                            <div className="input-group">
                                <input type="number" className="form-control" readOnly
                                    value={this.state.price} />
                                <span className="input-group-addon">$</span>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product inventory</label>
                        <div className="col-sm-3">
                            <div className="input-group">
                                <input type="number" className="form-control" readOnly
                                    value={this.state.stock} />
                                <span className="input-group-addon">N</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product Image</label>
                        <div className="col-md-10">
                            {
                                this.state.subImages.length > 0
                                    ? this.state.subImages.map((image, index) => (
                                        <div className="img-container" key={index}>
                                            <img src={image.url} className="sub-img" />
                                        </div>
                                    ))
                                    : <div>No image</div>
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product detail</label>
                        <div className="col-md-10" dangerouslySetInnerHTML={{__html: this.state.detail}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ProductDetail;