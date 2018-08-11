import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
//
import User from 'service/user-service.jsx'
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
const _user = new User();

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNum: 1,
            list: [],
        }
    }

    componentDidMount() {
        this.loadUserList();
    }

    loadUserList() {
        _user.getUserList(this.state.pageNum).then(res => {
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
            this.loadUserList();
        });
    }

    render() {
        let tableHeads = [
            { name: 'ID', width: '10%' },
            { name: 'Name', width: '15%' },
            { name: 'Email', width: '10%' },
            { name: 'Phone', width: '15%' },
            { name: 'Created Time', width: '15%' },
        ];

        let listBody = this.state.list.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{new Date(user.createTime).toLocaleString()}</td>
                </tr>
            )
        });

        return (
            <div id="page-wrapper">
                <PageTitle title="User List" />

                <TableList tableHeads={tableHeads}>
                    {listBody}
                </TableList>

                <Pagination current={this.state.pageNum} total={this.state.total}
                    onChange={(pageNum) => this.onPageNumChange(pageNum)} />
            </div>
        );
    }
}

export default UserList;

