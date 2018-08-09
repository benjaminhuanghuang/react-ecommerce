import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
//
import Home from 'page/home/index.jsx';    // using alias defined in webpack.config.js
import Layout from 'component/layout/index.jsx';    // using alias defined in webpack.config.js
import Login from 'page/login/index.jsx';    // using alias defined in webpack.config.js


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact paht="/login" component={Login} />
                    <Route exact paht="/" render={(props) => {
                        <Layout>
                            <Switch>
                                <Route exact paht="/" component={Home} />
                                <Route exact paht="/product" component={Home} />
                                <Route exact paht="/product-category" component={Home} />
                                <Route exact paht="/order" component={Home} />
                                <Route exact paht="/user" component={Home} />
                            </Switch>
                        </Layout>
                    }} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));