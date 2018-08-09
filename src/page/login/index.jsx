/*
    Copy code from bootstrap 3.37
    https://getbootstrap.com/docs/3.3/components/#panels
    https://getbootstrap.com/docs/3.3/css/#forms
*/

import React from 'react';
//
import './index.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">Login</div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />>
                        </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />>
                        </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> Check me out
                            </label>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;


