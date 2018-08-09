/*
    Copy code from bootstrap 3.37
    https://getbootstrap.com/docs/3.3/components/#panels
    https://getbootstrap.com/docs/3.3/css/#forms
*/

import React from 'react';
//
import './index.scss';
//
import User from 'service/user-service.jsx'
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
const _user = new User();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: _mm.getUrlParam('redirect') || ''
        }
    }

    onInputChange(e) {
        let inputName = e.target.name;

        this.setState({
            [inputName]: e.target.value
        })
    }

    onSubmit(e) {
        _user.login({
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            // jump to previous page
            this.props.history.push(this.state.redirect); 
        }, (errMsg) => {
            _mm.errorTips(errMsg);
        });  
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">Login</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="Email"
                                    name="username" onChange={e => { this.onInputChange(e) }}
                                />
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input type="password" className="form-control" placeholder="Password"
                                    name="password" onChange={e => { this.onInputChange(e) }}
                                />
                            </div>
                            <button className="btn btn-primary btn-lg btn-block"
                                onClick={e => { this.onSubmit(e) }}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;


