import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
import ListSearch from './index-list-search.jsx';

//

import MUtil from 'util/mm.jsx';
import Order from 'service/order-service.jsx'

const _mm = new MUtil();
const _order = new Order();

class OrderList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            pageNum: 1,
            listType: 'list'  // list or search
        }
    }
    // loaded at first time
    componentDidMount() {
        this.loadOrderList();
    }

    loadOrderList() {
        let listParam = {}
        listParam.listType = this.state.listType;
        listParam.pageNum = this.state.pageNum;

        if (this.state.listType === 'search') {
            listParam.orderNumber= this.state.orderNumber;
        }

        _order.getOrderList(listParam).then(res => {
            this.setState(res)
        }, errMsg => {
            this.setState({
                list: []    // show list info in table list
            });
            _mm.errorTips(errMsg);
        });
    }

    onPageNumChange(pageNum) {
        this.setState({
            pageNum
        }, () => {
            this.loadOrderList();
        });
    }

    onSearch(orderNumber) {
        let listType = orderNumber === "" ? 'list' : 'search'
        this.setState({
            listType,
            pageNum: 1,
            orderNumber,
        }, () => {
            this.loadOrderList();
        });
    }

    render() {
        let tableHeads = [
            'Order Number',
            'User',
            'Status',
            'Price',
            'Date',
            'Operation'
        ];

        let listBody = this.state.list.map((order, index) => {
            return (
                <tr key={index}>
                    <td>
                        <Link to={`/order/detail/${order.orderNo}`}>{order.orderNo}</Link>
                    </td>
                    <td>{order.receiverName}</td>
                    <td>{order.statusDesc}</td>
                    <td>{order.payment}</td>
                    <td>{order.createTime}</td>
                    <td>
                        <Link to={`/order/detail/${order.orderNo}`}>Details</Link>
                    </td>
                </tr>
            )
        });
        return (
            <div id="page-wrapper">
                <PageTitle title="Order List" />
                <ListSearch onSearch={(orderNum) => this.onSearch(orderNum)} />
                <TableList tableHeads={tableHeads}>
                    {listBody}
                </TableList>
                <Pagination current={this.state.pageNum} total={this.state.total}
                    onChange={(pageNum) => this.onPageNumChange(pageNum)} />
            </div>
        );
    }
}

export default OrderList;

