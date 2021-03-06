import React from 'react';
//
import PageTitle from 'component/page-title/index.jsx';
//
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx'

const _mm = new MUtil();
const _product = new Product();

class CategoryAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryList: [],
            parentId: 0,
            categoryName: ''
        }
    }
    // loaded at first time
    componentDidMount() {
        this.loadCategoryList();
    }
    // load parent category list
    loadCategoryList() {
        _product.getCategoryList(0).then(res => {
            // console.log('Category List', res);
            this.setState({
                categoryList: res
            })
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }

    onValueChange(e) {
        let name = e.target.name;
        let value = e.target.value.trim();

        this.setState({
            [name]: value
        });
    }
    
    onSubmit(e) {
        let categoryName = this.state.categoryName.trim();
        if (categoryName) {
            _product.saveCategory({
                parentId: this.state.parentId,
                categoryName
            }).then(res => {
                _mm.succesTips(res);
                this.props.history.push('/product-category/index');
            }, errMsg => {
                _mm.errorTips(errMsg);
            });
        }
        else {
            _mm.errorTips("Please input category name");
        }
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Add Category" />
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Parent Category</label>
                                <div className="col-sm-5">
                                    <select name="parentId" className="form-control"
                                        onChange={(e) => this.onValueChange(e)}>
                                        <option value="0"> Root Category</option>
                                        {
                                            this.state.categoryList.map((category, index) => {
                                                return (<option value={category.id} key={index}> Root Category/ {category.name}</option>);
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Product Name</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" placeholder="Category name"
                                        name='categoryName'
                                        onChange={(e) => this.onValueChange(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryAdd;

