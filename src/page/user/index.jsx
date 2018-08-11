import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
//
import User from 'service/user-service.jsx'
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
const _user = new User();

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNum : 1
        }
    }

    componentDidMount()
    {
        this.loadUserList();
    }

    loadUserList(){
        _user.getUserList(this.state.pageNum).then(res=>{
            this.setState(res);
        }, errMsg=>{
            _mm.errorTips(errMsg);
        });
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="User List">

                </PageTitle>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>ID</td>
                                    <td>ID</td>
                                    <td>ID</td>
                                    <td>ID</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>111</td>
                                    <td>111</td>
                                    <td>111</td>
                                    <td>111</td>
                                    <td>111</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <Pagination current={11} total={100} onChnage={()=>{}}/>
            </div>
        );
    }
}

export default UserList;

