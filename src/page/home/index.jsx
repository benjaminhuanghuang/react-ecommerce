import React from 'react';
import { Link } from 'react-router-dom';
//
import './index.scss';
import PageTitle from 'component/page-title/index.jsx'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userCount: '-',
            productCount: '-',
            orderCount: '-',
        }
    }
    
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Home" >
                </PageTitle>
                <div className="row">
                    <div className="col-md-4">
                        <Link to='/user' className="color-box brown">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>User count</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/user' className="color-box green">
                            <p className="count">{this.state.productCount}</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>Product count</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/user' className="color-box blue">
                            <p className="count">{this.state.orderCount}</p>
                            <p className="desc">
                                <i className="fa fa-check-square-o"></i>
                                <span>Order count</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

