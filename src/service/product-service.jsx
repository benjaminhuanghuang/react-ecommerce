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
    
    getProduct(id){
        return _mm.request({
            url: '/manage/product/detail.do',
            type: 'POST',
            data: {
                productId: id || 0
            }
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

    // Form validation
    checkProduct(product)
    {
        let result = {
            status: true,
            msg: "Validation passed."
        };
        
        if (typeof product.name !== 'string' || product.name.length === 0) {
            return {
                status: false,
                msg: "Product name can not be empty."
            }
        }

        if (typeof product.subtitle !== 'string' || product.subtitle.length === 0) {
            return {
                status: false,
                msg: "Subtitle name can not be empty."
            }
        }

        if (typeof product.price !== 'number' || product.price < 0) {
            return {
                status: false,
                msg: "Price is not correct."
            }
        }
        if (typeof product.stock !== 'number' || product.stock < 0) {
            return {
                status: false,
                msg: "Stock is not correct."
            }
        }

        if (typeof product.categoryId !== 'number' || product.categoryId < 0) {
            return {
                status: false,
                msg: "Product Id is not correct."
            }
        }

        return result;
    }

    //
    saveProduct(product)
    {
        return _mm.request({
            url: '/manage/product/save.do',
            type: 'POST',
            data: product
        });
    }

    saveCategory(category)
    {
        return _mm.request({
            url: '/manage/category/add_category.do',
            type: 'POST',
            data: category
        });
    }
}

export default Product;