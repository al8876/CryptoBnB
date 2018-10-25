import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Panel extends Component {
    render() {
        return(
            <div className="panel">
                {this.props.children}
            </div>
        );
    }
}

Panel.propTypes = {
    children: PropTypes.node.isRequired
}
