import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// copy code from 
// https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/index.html

class NavSide extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <NavLink exact activeClassName="active-menu" to="/">
                                <i className="fa fa-dashboard"></i>
                                <span>Home</span>
                              </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-list"></i>
                                <span> Product</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink activeClassName="active-menu" to="/product">Product Management</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active-menu" to="/product-category">Category Management</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="order">
                                <i className="fa fa-check-square-o"></i>
                                <span> Order</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink activeClassName="active-menu"  to="/order">Order Management</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/user">
                                <i className="fa fa-user-o"></i>
                                <span> User</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink activeClassName="active-menu"  to="/user">User Management</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavSide;


