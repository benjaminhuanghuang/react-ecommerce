/*
    Copy inline from bootstrap 3.37
    https://getbootstrap.com/docs/3.3/css/#forms
*/

import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import CategorySelector from './category-selector.jsx';
import FileUploader from 'util/file-uploader/index.jsx';
import RichEditor from 'util/rich-editor/index.jsx';
//
import './save.scss';
//
import Product from 'service/product-service.jsx'
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

    // For simple type fields
    onValueChange(e) {
        let name = e.target.name;
        let value = e.target.value.trim();

        this.setState({
            [name]: value
        });
    }

    onCategoryChange(categoryId, parentCategoryId) {
        // console.log("Category changed", categoryId, parentCategoryId);
        this.setState({
            categoryId,
            parentCategoryId
        });
    }

    onUploadSuccess(res) {
        let sumImages = this.state.subImages;
        sumImages.push(res);// uri and url
        this.setState({
            subImages: sumImages
        });
    }

    onUploadError(errMsg) {
        _mm.errorTips(errMsg || "upload file failed.");
    }

    onImageDelete(e) {
        let index = parseInt(e.target.getAttribute('index'));
        let subImages = this.state.subImages;
        subImages.splice(index, 1);
        this.setState(
            { subImages }
        );
    }

    onRichEditorChange(value) {
        console.log(value);
        this.setState({
            detail: value
        });
    }

    getSubImagesString() {
        return this.state.subImages.map((image) => image.url).join(',');
    }

    onSubmit(e) {
        let product = {
            name: this.state.name,
            subtitle: this.state.subtitle,
            categoryId: parseInt(this.state.categoryId),
            subImages: this.getSubImagesString(),
            detail: this.state.detail,
            price: parseFloat(this.state.price),
            stock: parseInt(this.state.stock),
            status: this.state.status,
        };
        // console.log(product);
        let productCheckResult = _product.checkProduct(product);
        // form validation
        if (productCheckResult.status) {
            _product.saveProduct(produt).then(res => {
                _mm.successTips(res);
                this.props.history.push('/product/index');
            }, errMsg => {
                _mm.errorTips(errMsg);
            });
        }
        else
        {
            _mm.errorTips(productCheckResult.msg);
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
                            <input type="text" className="form-control" placeholder="Product name"
                                name='name' onChange={(e) => this.onValueChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product info</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" placeholder="product info"
                                name='subtitle' onChange={(e) => this.onValueChange(e)} />
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
                                <input type="number" className="form-control" placeholder="product price"
                                    name='price' onChange={(e) => this.onValueChange(e)} />
                                <span className="input-group-addon">$</span>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Product inventory</label>
                        <div className="col-sm-3">
                            <div className="input-group">
                                <input type="number" className="form-control" placeholder="product inventory"
                                    name='stock' onChange={(e) => this.onValueChange(e)} />
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
                                            <i className="fa fa-close" onClick={(e) => this.onImageDelete(e)} index={index}></i>
                                        </div>
                                    ))
                                    : <div>Please update image</div>
                            }
                        </div>
                        <div className="col-md-10 col-md-offset-2 file-upload-container">
                            <FileUploader onSuccess={(data) => this.onUploadSuccess(data)}
                                onError={(errMsg) => onUploadError(errMsg)}>
                            </FileUploader>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">Product detail</label>
                        <div className="col-md-10">
                            <RichEditor onValueChange={(value) => this.onRichEditorChange(value)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default ProductSave;