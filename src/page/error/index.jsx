import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx'

class Error extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="page-wrapper">
                <p className="error">
                    Error!
                </p>
            </div>

        );
    }
}

export default Error;

