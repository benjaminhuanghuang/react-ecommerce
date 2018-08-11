import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import ProductList from 'page/product/index/index.jsx';


class ProductRouter extends React.Component {
    render() {
        return (        
                <Switch>
                    <Route path="/product/list" component={ProductList} />
                    <Redirect exact from="/product" to="/product/list" />
                </Switch>
          )
    }
}

export default ProductRouter;