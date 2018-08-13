import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
//

import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx'

const _mm = new MUtil();
const _product = new Product();

class OrderDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
        }
    }
    // loaded at first time
    componentDidMount() {
        
    }

    loadCategoryList() {
        _product.getCategoryList(this.state.parentCategoryId).then(res => {
            // console.log('Category List', res);
            this.setState({
                list: res
            })
        }, errMsg => {
            this.setState({
                list: []
            });
            _mm.errorTips(errMsg);
        });
    }

    render() {
        let tableHeads = [
            { name: 'Category ID', width: '10%' },
            { name: 'Name', width: '15%' },
            { name: 'Operation', width: '10%' },
        ];

        let listBody = this.state.list.map((category, index) => {
            return (
                <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>
                        <a href="" className="opear"
                            onClick={(e) => this.onUpdateName(category.id, category.name)}>Change name</a>
                        {
                            category.parentId === 0
                                ? <Link to={`/product-category/index/${category.id}`}>Sub category</Link>
                                : null
                        }
                    </td>
                </tr>
            )
        });

        return (
            <div id="page-wrapper">
                <PageTitle title="Category List">
                    <div className="page-header-right">
                        <Link className="btn btn-primary" to="/product-category/add">
                            <i className="fa fa-plus"></i>
                            <span>Add Category</span>
                        </Link>
                    </div>
                </PageTitle>
                <div className="row">
                    <div className="col-md-12">
                        <p>Parent Category ID: {this.state.parentCategoryId} </p>
                    </div>
                </div>
                <TableList tableHeads={tableHeads}>
                    {listBody}
                </TableList>
            </div>
        );
    }
}

export default OrderDetail;

