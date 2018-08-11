// 
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Product {
    getProductList(pageNum) {
        return _mm.request({
            url: '/manage/product/list.do',
            type: 'POST',
            data: {
                pageNum
            }
        });
    }

    setProductStatus(productId, status) {
        return _mm.request({
            url: '/manage/product/set_sale_status.do',
            type: 'POST',
            data: {
                pageNum
            }
        });
    }
}

export default Product;