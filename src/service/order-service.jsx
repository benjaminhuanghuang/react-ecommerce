// 
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Order {
    getOrderList(listParam) {
        let url = '';
        let data = {};
        if (listParam.listType === 'list') {
            url = '/manage/order/list.do';
            data.pageNum = listParam.pageNum;
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
    
    
}

export default Order;