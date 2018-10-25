import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PanelListWrapper extends Component {
    render() {
        return(
            <div className="panel-list">
                {this.props.children}
            </div>
        );
    }
}

PanelListWrapper.propTypes = {
    children: PropTypes.node.isRequired
}
