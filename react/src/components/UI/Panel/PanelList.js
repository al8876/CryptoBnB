import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PanelList extends Component {
    render() {
        return(
            <ul>
                {this.props.children}
            </ul>
        );
    }
}

PanelList.propTypes = {
    children: PropTypes.node.isRequired
}
