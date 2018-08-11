import React from 'react';
//
import './theme.css';
import './index.scss';

import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="warpper">
                <NavTop></NavTop>
                <NavSide></NavSide>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;


