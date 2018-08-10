import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
//
// using alias defined in webpack.config.js
import Home from 'page/home/index.jsx';    
import Layout from 'component/layout/index.jsx';    
import Login from 'page/login/index.jsx';    


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route exact path="/" render={(props) => (
                        <Layout>
                            <Switch>
                                <Route exact paht="/" component={Home} />
                                <Route exact paht="/product" component={Home} />
                                <Route exact paht="/product-category" component={Home} />
                                <Route exact paht="/order" component={Home} />
                                <Route exact paht="/user" component={Home} />
                            </Switch>
                        </Layout>
                    )} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));