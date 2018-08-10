import React from 'react';
import { Link } from 'react-router-dom';
//
import PageTitle from 'component/page-title/index.jsx'

class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Error">

                </PageTitle>
                <div className="row">
                    <div className="col-md-12">
                        <span>Can not find url, </span>
                        <Link to="/">Back to home page</Link>  
                    </div>
                </div>
            </div>

        );
    }
}

export default Error;

