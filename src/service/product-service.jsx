// 
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Product {
    getProductList(listParam) {
        let url = '';
        let data = {};
        if (listParam.listType === 'list') {
            url = '/manage/product/list.do';
            data.pageNum = listParam.pageNum;
        }
        else if (listParam.listType === 'search') {
            url = '/manage/product/search.do';
            data.pageNum = listParam.pageNum;
            data[listParam.searchType] = listParam.keyword;
        }

        return _mm.request({
            url,
            type: 'POST',
            data
        });
    }

    setProductStatus(productInfo) {
        return _mm.request({
            url: '/manage/product/set_sale_status.do',
            type: 'POST',
            data: productInfo
        });
    }

    //
    getCategoryList(parentCategoryId) {
        return _mm.request({
            type: 'POST',
            url: '/manage/category/get_category.do',
            data: {
                categoryId: parentCategoryId || 0
            }
        });
    }
}

export default Product;