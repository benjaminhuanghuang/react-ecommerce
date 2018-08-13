import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
//
// using alias defined in webpack.config.js
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';
import Error from 'page/error/index.jsx';
import UserList from 'page/user/index.jsx';
//
import ProductRouter from 'page/product/router.jsx';
import CategoryList from 'page/product/category/index.jsx';

class App extends React.Component {
    render() {
        let layoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={ProductRouter} />
                    <Route path="/product-category" component={CategoryList} />
                    <Route path="/order" component={Home} />
                    <Route path="/user/index" component={UserList} />
                    <Redirect exact from="/user" to="/user/index" />
                    <Route component={Error} />
                </Switch>
            </Layout>
        );

        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" render={(props) => layoutRouter} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));