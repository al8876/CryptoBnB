import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StackAction extends Component {
    render() {
        return (
            <li>
                {this.props.link ?
                    <a href={this.props.link}>
                        {this.props.icon ? <span><i className="md-icon">{this.props.icon}</i></span> : ''}
                        {this.props.title ? <strong>{this.props.title}</strong> : ''}
                    </a>
                : ''}
            </li>
        );
    }
}

StackAction.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string
}
