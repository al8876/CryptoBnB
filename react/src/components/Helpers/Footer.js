import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-left">
                    &copy; 2017 Created by Code Vision. All rights reserved.
                </div>

                <div className="footer-right">
                    <ul>
                        <li><a>FAQ</a></li>
                        <li><a>Support</a></li>
                        <li><a>Knowledge Base</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
