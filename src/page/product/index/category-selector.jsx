import React from 'react';
//
import './category-selector.scss';
//
import Product from 'service/product-service.jsx'
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
const _product = new Product();


class CategorySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCategoryList: [],
            firstCategoryId: 0,
            secondCategoryList: [],
            secondCategoryId: 0,
        }
    }

    componentDidMount() {
        this.loadFirstCategory();
    }

    loadFirstCategory() {
        _product.getCategoryList().then(res => {
            this.setState({ firstCategoryList: res });
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }

    loadSecondCategory() {
        _product.getCategoryList(this.state.firstCategoryId).then(res => {
            this.setState({ secondCategoryList: res });
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }

    onFirstCategoryChange(e) {
        let newValue = e.target.value || 0;

        this.setState({
            firstCategoryId: newValue,
            secondCategoryId: 0,
            secondCategoryList: []
        }, () => {
            this.loadSecondCategory();
            this.onPropsCategoryChange();
        })
    }

    onSecondCategoryChange(e) {

    }

    // Pass to parent component
    onPropsCategoryChange() {
        // this.props.onPropsCategoryChange();
    }

    render() {
        return (
            <div className="col-sm-10">
                <select className="form-control cate-select"
                    onChange={(e) => this.onFirstCategoryChange(e)}>
                    <option value="">Please select catgory 1</option>
                    {
                        this.state.firstCategoryList.map((category, index) =>
                            <option value={category.id} key={index}>{category.name}</option>
                        )
                    }
                </select>
                {
                    this.state.secondCategoryList.length> 0 ?
                    (
                        <select name="" className="form-control cate-select"
                            onChange={(e) => this.onSecondCategoryChange(e)}>
                            <option value="">Please select catgory 2</option>
                            {
                                this.state.secondCategoryList.map((category, index) =>
                                    <option value={category.id} key={index}>{category.name}</option>
                                )
                            }
                        </select>
                    ):  null
                }

            </div>
        );
    }
}

export default CategorySelector;

