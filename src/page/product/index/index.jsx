import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
//
import './index.scss';
//
import Product from 'service/product-service.jsx'
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
const _product = new Product();

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNum: 1,
            list: [],
        }
    }

    componentDidMount() {
        this.loadProductList();
    }

    loadProductList() {
        _product.getProductList(this.state.pageNum).then(res => {
            this.setState(res)
        }, errMsg => {
            this.setState({
                list: []
            });
            _mm.errorTips(errMsg);
        });
    }

    onPageNumChange(pageNum) {
        this.setState({
            pageNum
        }, () => {
            this.loadProductList();
        });
    }

    onSetProductStatus(e, productId, currentStatus) {
        let confirmTips = currentStatus == 1 ? "Are you sure to deactive" : "Are you sure to inactive";
        if (window.confirm(confirmTips)) {
            let newStatus = currentStatus == 1 ? 2 : 1;
            _product.setProductStatus({
                productId: productId,
                status: newStatus
            }).then(res => {
                _mm.successTips(res);
                this.loadProductList();
            }, errMsg => {
                _mm.errorTips(errMsg);
            });
        }
    }

    render() {
        let tableHeads = [
            { name: 'Product ID', width: '10%' },
            { name: 'Product Information', width: '50%' },
            { name: 'Price', width: '10%' },
            { name: 'State', width: '15%' },
            { name: 'Operation', width: '15%' },
        ];

        let listBody = this.state.list.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>
                        <p>{product.name}</p>
                        <p>{product.subtitle}</p>
                    </td>
                    <td>{product.price}</td>
                    <td>
                        <p>
                            {
                                product.status == 1 ? 'aviliable' : 'unavaliable'
                            }
                        </p>
                        <button className="btn btn-xs btn-warning" onClick={(e) => { this.onSetProductStatus(e, product.id, product.status) }}>
                            {
                                product.status == 1 ? 'deactive' : 'active'
                            }
                        </button>
                    </td>
                    <td>
                        <Link className="opear" to={`/product/detail/${product.id}`}>Details</Link>
                        <Link className="opear" to={`/product/save/${product.id}`}>Edit</Link>
                    </td>
                </tr>
            )
        });
        return (
            <div id="page-wrapper">
                <PageTitle title="Product List" />

                <TableList tableHeads={tableHeads}>
                    {listBody}
                </TableList>
                <Pagination current={this.state.pageNum} total={this.state.total}
                    onChange={(pageNum) => this.onPageNumChange(pageNum)} />
            </div>
        );
    }
}

export default ProductList;