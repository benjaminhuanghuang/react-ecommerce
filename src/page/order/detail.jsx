import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';

import MUtil from 'util/mm.jsx';
import Order from 'service/order-service.jsx'

const _mm = new MUtil();
const _order = new Order();

class OrderDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderNumber: this.props.match.params.orderNumber,
            orderInfo: {}
        }
    }
    // loaded at first time
    componentDidMount() {
        this.loaderOrderDetial()
    }

    loaderOrderDetial() {
        if (this.state.orderNumber) {
            _order.getOrderDetail(this.state.orderNumber).then(res => {
                this.setState({
                    orderInfo: res
                });
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        }

    }

    render() {
        let receiverInfo = this.state.orderInfo.shippingVo || {};

        let tableHeads = [
            'Product Image',
            'Product Info',
            'Price',
            'Count',
            'Summary'
        ];
        let productList = this.state.orderInfo.orderItemVoList || [];
        let listBody = productList.map((product, index) => {
            return (
                <tr key={index}>
                    <td>
                        <img className="p-img" src={`${product.productImage}`} 
                            alt={product.productName}></img>
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.currentUnitPrice}</td>
                    <td>{product.quantity}</td>
                    <td>{product.totalPrice}</td>
                </tr>
            )
        });
        return (
            <div id="page-wrapper">
                <PageTitle title="Order Detail" />
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Order Number</label>
                        <div className="col-sm-5">
                            <p className="form-control-static">{this.state.orderInfo.orderNo}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Create time</label>
                        <div className="col-sm-5">
                            <p className="form-control-static">{this.state.orderInfo.createTime}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Receiver</label>
                        <div className="col-sm-5">
                            <p className="form-control-static">
                                {receiverInfo.receiverName}
                                {receiverInfo.receiverProvince}
                                {receiverInfo.receiverCity}
                                {receiverInfo.receiverAddress}
                                {receiverInfo.receiverMobile || receiverInfo.phone}
                            </p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Order Status</label>
                        <div className="col-sm-5">
                            <p className="form-control-static">{this.state.orderInfo.statusDesc}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Order Payment</label>
                        <div className="col-sm-5">
                            <p className="form-control-static">{this.state.orderInfo.payment}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Products List</label>
                        <div className="col-sm-10">
                            <TableList tableHeads={tableHeads}>
                                {listBody}
                            </TableList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderDetail;

