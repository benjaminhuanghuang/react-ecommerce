import React from 'react';
//
import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';
//

import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx'

const _mm = new MUtil();
const _product = new Product();

class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            parentCategoryId: this.props.match.params.categoryId || 0
        }
    }

    componentDidMount() {
        this.loadCategoryList();
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

    onUpdateName(id, name) {
        let newName = window.prompt('Please input new name', name);
        if (newName) {
            _product.updateCategoryName({
                categoryId: id,
                categoryName: newName
            }).then(res => {
                _mm.successTips(res);
                this.loadCategoryList();
            }, errMsg => {
                _mm.errorTips(errMsg);
            });
        }
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
                    </td>
                </tr>
            )
        });

        return (
            <div id="page-wrapper">
                <PageTitle title="Category List" />

                <TableList tableHeads={tableHeads}>
                    {listBody}
                </TableList>
            </div>
        );
    }
}

export default CategoryList;

