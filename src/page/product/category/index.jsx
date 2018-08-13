import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';
//
import Category from 'service/category-service.jsx'
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
const _category = new Category();

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
        _user.getUserList(this.state.parentCategoryId).then(res => {
            this.setState(res)
        }, errMsg => {
            this.setState({
                list: []
            });
            _mm.errorTips(errMsg);
        });
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
                        <a href="" className="opear"></a>
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

