import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
//
import Home from 'page/home/index.jsx';    // using alias defined in webpack.config.js
import Layout from 'component/layout/index.jsx';    // using alias defined in webpack.config.js


class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact paht="/" component={Home} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));