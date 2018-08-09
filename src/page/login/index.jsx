/*
    Copy code from bootstrap 3.37
    https://getbootstrap.com/docs/3.3/components/#panels
    https://getbootstrap.com/docs/3.3/css/#forms
*/

import React from 'react';
//
import './index.scss';
// 
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    onInputChange(e) {
        let inputName = e.target.name;

        this.setState({
            [inputName]: e.target.value
        })
    }

    onSubmit(e) {
        _mm.request({
            url: 'manage/user/login.do',
            type: 'POST',
            data: {
                username: this.state.username,
                password: this.state.password
            }

        }).then((res)=>{

        }, (err)=>{

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
                                    name="username" onChagne={e => { this.onInputChange(e) }}
                                />
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input type="password" className="form-control" placeholder="Password"
                                    name="password" onChagne={e => { this.onInputChange(e) }}
                                />
                            </div>
                            <button className="btn btn-primary btn-lg btn-block"
                                onSubmit={e => { this.onSubmit(e) }}>
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


