import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PanelListItem extends Component {
    render() {
        return(
            <li>
                {this.props.children}
            </li>
        );
    }
}

PanelListItem.propTypes = {
    children: PropTypes.node.isRequired
}
