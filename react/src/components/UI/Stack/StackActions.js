import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StackActions extends Component {
    render() {
        return (
            <div className="stack-actions">
                <ul>{this.props.children}</ul>
            </div>
        );
    }
}

StackActions.propTypes = {
    children: PropTypes.node.isRequired
}
