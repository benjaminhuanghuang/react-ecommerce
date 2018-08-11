import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
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

    render() {
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
                        {
                            <span>product.status == 1 ? 'aviliable':'unavaliable'</span>
                        }
                    </td>
                </tr>
            )
        });
        return (
            <div id="page-wrapper">
                <PageTitle title="Product List"/>

                <TableList tableHeads={["ID", "Information", "Price", "State", "Operation"]}>
                    {
                        listBody
                    }
                </TableList>
                <Pagination current={this.state.pageNum} total={this.state.total}
                    onChange={(pageNum) => this.onPageNumChange(pageNum)} />
            </div>
        );
    }
}

export default ProductList;