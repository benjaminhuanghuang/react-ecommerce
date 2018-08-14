// 
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Order {
    getOrderList(listParam) {
        let url = '';
        let data = {};
        if (listParam.listType === 'list') {
            url = '/manage/order/list.do';
            data.pageNum = listParam.orderNumber;
        }
        else if (listParam.listType === 'search') {
            url = '/manage/order/search.do';
            data.pageNum = listParam.pageNum;
            data.orderNo = listParam.orderNumber;
        }

        return _mm.request({
            url,
            type: 'POST',
            data
        });
    }

    getOrderDetail(orderNumber) {
        return _mm.request({
            url: '/manage/order/detail.do',
            type: 'POST',
            data:{
                orderNo: orderNumber
            }
        });
    }

    sendGoods(orderNumber){
        return _mm.request({
            url: '/manage/order/send_goods.do',
            type: 'POST',
            data:{
                orderNo: orderNumber
            }
        });
    }
}

export default Order;