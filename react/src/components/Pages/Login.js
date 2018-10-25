import React, { Component } from 'react';

import Empty from '../Layouts/Empty';
import { Button }  from '../UI/Button';

export default class Login extends Component {
    render() {
        return (
            <Empty>
                <h1>Welcome Back</h1>

                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" name="password"  className="form-control"/>
                    </div>

                    <div className="form-group form-group-button">
                        <div className="form-group-button-description">
                            <a>I forgot password</a>
                        </div>

                        <button type="submit" className="button button-primary button-right">Login</button>
                    </div>
                </form>

                <div className="form-description">
                    <Button to='#' classes="button-block button-google">Login using Google+</Button>
                    <Button to='#' classes="button-block button-facebook">Login using Facebook</Button>
                </div>
            </Empty>
        );
    }
}
