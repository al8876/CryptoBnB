import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Stack extends Component {
    render() {
        return (
            <div className={this.props.classes + ' stack-wrapper'}>
                <div className="stack">
                    {this.props.title ? <h2>{this.props.title}</h2> : ''}

                    <div className="stack-inner">
                        <h3>Shortcuts</h3>
                        <div className="stack-shortcuts">
                            <ul>
                                <li><a>Companies</a></li>
                                <li><a>UI/UX Tag</a></li>
                                <li><a>Quick Hotline</a></li>
                                <li><a>Restart</a></li>
                                <li><a>Flush Cache</a></li>
                            </ul>
                        </div>


                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Stack.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.string,
    title: PropTypes.string
}
